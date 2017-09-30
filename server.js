var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express();

var huh = require('./app/routing/htmlRouts.js') 















// app.use('/', function(req, res, next){

//     console.log(req.url);

// next();
// })

// app.get('/', function(req, res){

//     console.log(req.params);
// res.send("Welcome to the home page.")

// })



app.listen(2222, function(){
    console.log("Listening to PORT 2222");
})