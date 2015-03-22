var express = require('express'),
    randToken = require('rand-token');

var controls = express();

var db = {};

//Rutes
controls.route('/api/controls/:id?')
    .all(function(req,res,next){
        console.log(req.method,req.path,req.body);
        res.set('Content-Type','application/json');
        next();
    })
    //POST
    .post(function(req,res){
        var newControl = req.body.control;
        newControl.id = randToken.uid(16);

        db[newControl.id] = newControl;

        res.status(201).json({
            'control' : newControl
        });
    })
    //GET
    .get(function(req,res){
        var id = req.params.id;
        var control = db[id];
        res.json({
            'controls' : control
        });
    });

module.exports = controls;
