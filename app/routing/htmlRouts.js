var express = require("express")
var path = require('path')
var bodyParser = require("body-parser")
var app = express();

module.exports = function getOne(){
    
    app.get("/", function(req, res){
    console.log(hi);
    app.sendFile(path.join(__dirname + "/public/home.html"))
})}