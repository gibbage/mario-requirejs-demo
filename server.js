var PORT = 4000;
var DIST_DIR = __dirname;

var express = require('express');
var server = express();

// simple logger
server.use(function (req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
});

server.use(express.static(DIST_DIR));

server.listen(PORT);
console.log('Listening on port ' + PORT);
