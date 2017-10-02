function routeOne(app, __dirname, path) {

    app.get("/", function (req, res) {
        
        res.sendFile(path.join(__dirname + "/app/public/home.html"))
    })

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


module.exports = routeOne;