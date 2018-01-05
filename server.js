//dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//import path from 'path';
//Sets up Express App
//==============================================

var app = express();
var PORT = 3001;

app.use(express.static(path.join(__dirname, './public')));

//Sets up express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

require('./routing/htmlRoutes')(app);
require('./routing/apiRoutes')(app);


app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT)
});

