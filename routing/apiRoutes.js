var participants = require('../data/friends.js');

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(participants);
    });


    //search for specific character (or all characters) - provides JSON
    app.get("/api/:characters?", function (req, res) {
        var chosen = req.params.characters;

        if (chosen) {
            console.log(chosen);

            for (var i = 0; i < characters.length; i++) {
                if (chosen === characters[i].routeName) {
                    return res.json(characters[i])
                }
            }
            return res.json(false);
        }
        return res.json(characters);
    });

    //create new characters - takes in JSON input
    app.post("/api/new", function (req, res) {
        console.log(req.body)
        console.log(req.body.answers)
        var answersSum = 0

        participants.push(req.body)
        req.body.answers.forEach(function (answer) {
            answersSum += parseInt(answer)
        })
        console.log('The total Sum of Answers is', answersSum)
        participants.forEach(function (person) {
            var PersonAnswerSum = 0
            person.answers.forEach(function (answer) {
                PersonAnswerSum += parseInt(answer)
            })
            if (PersonAnswerSum == answersSum) {
                console.log(person)

                res.json(person)
            } else {
                letRandomGuy = participants[Math.floor(Math.random() * participants.length)]
                res.json(letRandomGuy)
            }
        })
    });

}