var port = process.env.PORT || 3000;
const { response } = require('express');
var express = require('express');
var app = express();
var session = require('express-session');
var bcrypt = require('bcrypt');
const router = express.Router();
var db = require("./modules/db");
const connection = require('./modules/db');
var morgan = require('morgan');
app.use(morgan('dev'));
app.use('/dance', require('./routes/dance'));
app.use('/tourism', require('./routes/tourism'));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render('main');
});

app.get('/tourism', (req, res) => {
    res.render("main tourism page");
});

app.get('/dance', (req, res) => {
    res.render("dance main page");
});

const sessionConfig = {
    secret: '@this@is$bharatwasii$',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig));
app.post('/login', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    console.log(req.body);
    db.query('SELECT * FROM user WHERE email = ?', [email], async function (error, results, fields) {
        if (error) {
            console.log(error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            console.log(results);
            if (results.length > 0) {
                const comparision = await bcrypt.compare(password, results[0].password)
                if (comparision) {
                    req.session.username = results[0].username;
                    res.end('done');
                }
                else {
                    res.end('wrongdone');
                }
            }
            else {
                res.end('Email does not exits');
            }
        }
    });

});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    if (!name || !email || !password)
        res.end('credentials required!');
    else {
        const hash = await bcrypt.hash(password, 12);
        var user = {
            "email": email,
            "Name": name,
            "username": name,
            "password": hash
        }
        db.query('INSERT INTO user SET ?', user, function (error, results, fields) {
            if (error) {
                res.send({
                    "code": 400,
                    "failed": "error occured"
                })
            } else {
                req.session.username = name;
                res.end('done');
            }
        });
    }

});

app.get('/admin', (req, res) => {
    if (req.session.username) {
        res.write(`<h1>Hello ${req.session.username} </h1><br>`);
        res.end('<a href=' + '/logout' + '>Logout</a>');
    }
    else {
        res.write('<h1>Email or password is wrong! Please login first.</h1>');
        res.end('<a href=' + '/' + '>Login</a>');
    }
});

app.use('/', router);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
