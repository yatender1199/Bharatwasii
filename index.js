var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
app.set("view engine","ejs");
app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.get('/:state/:place',(req,res)=>{
   var state = req.params.state;
   var place = req.params.place;
   res.render("Tourism/"+state+"/"+place);
});
app.listen(port,()=>{
    console.log(`Running on port ${port}`);
});
