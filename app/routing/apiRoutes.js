// SETTING FUNCTION TO BE USED IN MAIN SERVER FILE 
module.exports = function (app, heros) {

    // SENDING HERO API TO /api/heros
    app.get("/api/heros", function (req, res) {

        res.json(heros)

    })

    // PUSHING NEW HERO TO HERO API AND COMPARING USER INPUT TP FIND MATCHING HERO. 
    app.post('/api/heros', function (req, res) {

        // HERE I STORE THE TOTALS OF HERO ANSWERS MINUS THE USERS ANSWERS 
        var userMatchMath = []

        // HERE I STORE THE REDUCED TOTAL FOR EACH HERO'S ANSWER.
        var heroTotals = []

        // HERE I STORE THE PARSED USER ANSWERS
        var parseUserInput = []

        // HERE I STORE THE DIFFERENCES AFTER THE USER TOTAL IS SUBTRACTED FROM EACH HERO'S TOTAL. 
        var matchIndex = []

        // I RUN THREW EVERY ANSWER OF EACH HERO AND SUBTRACT THE USERS INPUT FOR THAT SAME QUESTION AND PUSH IT INTO THE UserMatchMath ARRAY.
        for (var i = 0; i < heros.length; i++) {

            for (var j = 0; j < heros[0].answers.length; j++) {

                userMatchMath.push(Math.abs(heros[i].answers[j] - req.body.answers[j]))

            }
        }
        // HERE I SPLICE THE userMatchMath ARRAY FOR EACH USER AND REDUCE IT TO A TOTAL AND STORE IT IN THE heroTotals ARRAY. 
        for (var k = 0; k < heros.length; k++) {

            var match = userMatchMath.splice(0, 10)

            var sum = match.reduce(function (a, b) {
                return a + b;
            }, 0)

            heroTotals.push(sum)
        }

        // MY USER INPUTS WERE COMING IN STRINGED SO HERE I PARSE THEM AND STORE THEM IN THE parseUserInput ARRAY.
        req.body.answers.forEach(function (element) {
            parseUserInput.push(parseInt(element))
        }, this)

        // HERE I REDUCE THE PARSED INFO INTO A TOTAL SUM
        var userSum = parseUserInput.reduce(function (a, b) {
            return a + b;
        }, 0);

        // HERE I SUBTRACT THE USER SUM AND EACH HERO'S TOTAL AND PUSH THE SUM INTO THE matchIndex ARRAY.
        heroTotals.forEach(function (element) {
            matchIndex.push(Math.abs(element - userSum));

        }, this);

        // HERE I CLONE THE matchIndex ARRAY SO I CAN SORT THE matchIndex ARRAY FROM LEAST DIFFERENCE TO MOST.
        var cloneArray = []

        for (var e = 0; e < matchIndex.length; e++) {

            cloneArray.push(matchIndex[e])
        }

        // HERE I SORT THE matchIndex ARRAY FROM LEAST DIFFERENCE TO MOST.
        var matchHero = matchIndex.sort(function (a, b) {
            return a - b
        });

        // HERE I FIND THE MATCH BY TAKING THE LEAST DIFFERENCE FROM THE matchHero ARRAY AND FINDING THE MATCHING INDEX IN THE cloneArray.
        var findMatch = cloneArray.indexOf(matchHero[0])

        // HERE I MAKE A CATCH IF THE USER MATCHES TWO HEROS, ONE GETS CHOSEN BY RANDOM.
        if (matchHero[0] == matchHero[1]) {
            console.log("THE CATCH MATCH ", heros[Math.floor((Math.random() * 2) + 0)]);
        } else {
            console.log("THE MATCH", heros[findMatch])
        }


        // HERE I LOG EVERYTHING FOR TESTING PURPOSES 
        // console.log("findMatch", findMatch);
        // console.log("matchHero", matchHero);
        // console.log("cloneArray", cloneArray);
        // console.log("heroTotals", heroTotals);
        // console.log("userSum", userSum);


        // HERE I PUSH THE USERS INFO INT THE HERO API
        heros.push(req.body)

    })

}