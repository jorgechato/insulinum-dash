//Dependencies
var express = require('express.io'),
    bodyParser = require('body-parser'),
    swig = require('swig'),
    _ = require('underscore');
//Local variables
var server = express();

server.http().io();

server.set('port', (process.env.PORT || 5000));
//Static files
server.use(express.static('./public'));

//Config views
server.engine('html',swig.renderFile);
server.set('view engine','html');
server.set('views','./app/views');

//Middleware
server.use(bodyParser.json('application/json'));

//API controls page
server.post('/controls',function(req,res){
    res
        .status(201)
        .json({});
});

//Server
if(!module.parent){
    server.listen(server.get('port'), function() {
        console.log("Node app is running at http://localhost:" + server.get('port'));
    });
}else{
    module.exports = server;
}
