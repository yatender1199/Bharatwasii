var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
var db = require("./modules/db");
app.use('/dance',require('./routes/dance'));
app.use('/tourism',require('./routes/tourism'));
app.set("view engine","ejs");

app.get('/',(req,res)=>{
    res.render('main');
});

app.get('/tourism',(req,res)=>{
    res.render("main tourism page");
});

app.get('/dance',(req,res)=>{
    res.render("dance main page");
});
app.get('/religion',(req,res)=>{
	res.render("religion main page");
})

app.listen(port,()=>{
     console.log(`Running on port ${port}`);
});
