var path = require('path');
//basic route that sends the user first to the AJAX page
module.exports = function(app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // "/"-root directory in local host
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}

// function test(num, str) {
//     console.log(num); // 10
// }

// test(10, 'some string');
