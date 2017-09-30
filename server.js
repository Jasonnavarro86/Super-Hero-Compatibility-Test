var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var heros = require('./app/data/friends.js')
var routes = require('./app/routing/htmlRouts.js')
var Api = require('./app/routing/apiRoutes.js')

var app = express()




app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

console.log(heros);

routes(app, __dirname);








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