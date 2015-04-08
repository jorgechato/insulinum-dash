var express = require('express'),
    randToken = require('rand-token');
var Controls = require('./model');
//Local variables
var api = express();

//Rutes
api.get('/api/controls',function(req,res){
    Controls.find({}).exec()
        .then(function(controls){

            var controlsFixed = controls.map(function(control) {
                return control.toJSON();
            });

            res.status(200)
                .set('Content-Type','application/json')
                .json({
                    "controls" : controlsFixed
                });
        },function(err){
            console.log('ERROR',err);
        });
});

api.route('/api/controls/:id?')
    .all(function(req,res,next){
        console.log(req.method,req.path,req.body);
        res.set('Content-Type','application/json');
        next();
    })
    //POST
    .post(function(req,res){
        var newControl = req.body.control;

        Controls.create(newControl)
            .then(function(control){
                res.status(201).json({
                    "control" : control.toJSON()
                });
            });
    })
    //GET
    .get(function(req,res,next){
        var id = req.params.id;

        if(!id){
            return next();
        }

        Controls.findById(id,function(err,control){
            if(!control){
                res.status(404).send({});
            }

            res.json({
                "control" : control
            });
        });
    })
    //DELETE
    .delete(function(req,res){
        var id = req.params.id;

        Controls.remove({_id:id},function(){
            res.status(204).send({});
        });
    });

module.exports = api;
