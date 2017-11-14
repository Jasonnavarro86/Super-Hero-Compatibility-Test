// Here I set my function to send html files in our main server.js.

function routeOne(app, __dirname, path) {

    // Home page

    app.get("/", function (req, res) {
        
        res.sendFile(path.join(__dirname + "/app/public/home.html"))
    })

    // All other pagers after the / except survey, all ,and comeagain.
    app.get("/:name", function (req, res) {
        switch(req.path){
            case "/survey":
            res.sendFile(path.join(__dirname + "/app/public/survey.html"))
            break;
            case "/all":
            res.sendFile(path.join(__dirname + "/app/public/home.html"))
            break;
            case "/comeagain":
            res.sendFile(path.join(__dirname + "/app/public/comeagain.html"))
            break;
            default:
            res.sendFile(path.join(__dirname + "/app/public/home.html"))
        }

    })
}
// Exporting Function
module.exports = routeOne;