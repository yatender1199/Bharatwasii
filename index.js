var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
app.use('/tourism',require('./routes/tourism'));
app.set("view engine","ejs");

app.get('/',(req,res)=>{
    res.render("main tourism page");
});

app.listen(port,()=>{
     console.log(`Running on port ${port}`);
});
