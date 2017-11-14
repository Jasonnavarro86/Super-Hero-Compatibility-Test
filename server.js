// NPM DEPENDENCIES
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()

// LOCAL FILES
var heros = require('./app/data/friends.js')
var routes = require('./app/routing/htmlRouts.js')
var Api = require('./app/routing/apiRoutes.js')

var PORT = process.env.PORT || 2222;

// SETTING MIDDLEWARE WITH BODY PARSER
app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

// CALLING ROUTE AND API PATHS FORM ROUTING FOLDER
routes(app, __dirname, path)

Api(app, heros)

// L I S T E N I N G  T O  P O R T
app.listen(PORT, function(){
    console.log("Listening to PORT 2222");
})