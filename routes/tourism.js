var express = require('express');
var router = express.Router();
router.get('/:state/:place',(req,res)=>{
    var state = req.params.state;
    var place = req.params.place;
    res.render("Tourism/"+state+"/"+place);
 });
 router.get('/:state',(req,res)=>{
    var state = req.params.state;
    res.render("Tourism/"+state+"/index");
 });
module.exports = router; 