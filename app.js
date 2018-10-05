var express = require("express"),
    engines = require("consolidate");

var app = express();

app.use(express.static(__dirname + '/'));

app.get("/", function (req, res) {
    res.render('index.html');
});

app.listen(3000, function () {
    // console.log("Started");
});