var express = require("express"),
    engines = require("consolidate"),
    http = require("http");

var app = express();

app.use(express.static(__dirname + '/'));

app.get("/", function (req, res) {
    res.render('index.html');
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3001';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on ${port}`));