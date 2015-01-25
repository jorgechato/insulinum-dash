var express = require('express');

var api = express();

var db = {};

//Rutes
api.route('/api/control/:id?')
    .all(function(req, res, next){
        console.log(req.method, req.path, req.body);
        res.set('Content-Type','application/json');
        next();
    })
    //POST
    .post(function(req,res){
        var control = req.body.control;
        control.id = Date.now();

        db[control.id] = control;

        res.status(201).json({'controls':control});
    })
    //GET ONE
    .get(function(req,res){
        var id = req.params.id;
        var control = db[id];

        res.json({'controls':control});
    });

module.exports = api;
