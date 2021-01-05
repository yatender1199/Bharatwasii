var express = require('express');
var router = express.Router();
 router.get('/:religion',(req,res)=>{
    var religion = req.params.religion;
    res.render("religion/"+religion);
 });
module.exports = router; 