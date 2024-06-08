var express = require("express");

var router = express.Router();

router.get("/",function(req,res){
    console.log("Hello im in the basic view");
    res.render("index");
});

router.get("/LogIn",function(req,res){
    console.log("Open LogIn");
    res.render("login");
});

router.get("/About",function(req,res){
    console.log("Open About");
    res.render("About");
});

module.exports = router;