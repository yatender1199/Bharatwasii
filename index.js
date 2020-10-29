var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
app.use('/dance',require('./routes/dance'));
app.use('/tourism',require('./routes/tourism'));
app.set("view engine","ejs");
app.get('/tourism',(req,res)=>{
    res.render("main tourism page");
});

app.get('/dance',(req,res)=>{
    res.render("dance main page");
});

app.listen(port,()=>{
     console.log(`Running on port ${port}`);
});
