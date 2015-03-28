var express = require('express'),
    randToken = require('rand-token'),
    _ = require('lodash');

var controls = express();

var db = {};

//Rutes
controls.get('/api/controls',function(req,res){
    var controls = _.values(db);
    res.status(200)
        .set('Content-Type','application/json')
        .json({
            'controls' : controls
        });
});

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
    .get(function(req,res,next){
        var id = req.params.id;

        var control = db[id];

        if(!control){
            res.status(404).send({});
        }

        res.json({
            'control' : control
        });
    })
    //DELETE
    .delete(function(req,res){
        var id = req.params.id;
        delete db[id];

        res.status(204).send();
    });

module.exports = controls;
