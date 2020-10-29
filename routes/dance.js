var express = require('express');
var router = express.Router();
 router.get('/:dance',(req,res)=>{
    var dance = req.params.dance;
    res.render("dance/"+dance);
 });
module.exports = router; 