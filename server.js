//Dependencies
var express = require('express.io'),
    swig = require('swig'),
    _ = require('underscore'),
    bodyParser = require('body-parser');

var server = express();
server.http().io();

//Static files
server.use(express.static('./public'));

//Config views
server.engine('html',swig.renderFile);
server.set('view engine','html');
server.set('views','./app/views');

server.get('/',function(req, res){
    res.render('index');
});

//Middleware
server.use(bodyParser.json('application/json'));

//Rutes
var controls = require('./lib/control');
server.use(controls);

//Start server
if(!module.parent){
    server.listen(80);
}else{
    module.exports = server;
}
