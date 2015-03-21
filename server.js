//Dependencies
var express = require('express.io'),
    swig = require('swig'),
    _ = require('underscore'),
    bodyParser = require('body-parser');

var server = express();
server.http().io();

server.set('port', (process.env.PORT || 80));
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
// if(!module.parent){
    server.listen(server.get('port'),function(){
        console.log("Node app is running at localhost:" + server.get('port'));
    });
// }else{
    // module.exports = server;
// }
