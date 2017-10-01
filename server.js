// NPM EXPORTS
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()

// LOCAL FILES
var heros = require('./app/data/friends.js')
var routes = require('./app/routing/htmlRouts.js')
var Api = require('./app/routing/apiRoutes.js')



// SETTING MIDDLEWARE WITH BODY PARSER
app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())


// CALLING ROUTE AND API PATHS FORM ROUTING FOLDER
routes(app, __dirname, path)

Api(app, heros)



// L I S T E N I N G  T O  P O R T
app.listen(2222, function(){
    console.log("Listening to PORT 2222");
})