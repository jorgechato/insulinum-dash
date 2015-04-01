var express = require('express'),
    randToken = require('rand-token'),
    _ = require('lodash');
var Control = require('../../app/models/control');
//Local variables
var controls = express();

//Rutes
controls.get('/api/controls',function(req,res){
    // var controls = _.values(db);

    Control.find({}).exec()
        .then(function(controls){

            var controlsFixed = controls.map(function(control) {
                return control.toJSON();
            });

            res.status(200)
                .set('Content-Type','application/json')
                .json({
                    'controls' : controls
                });
        },function(err){
            console.log('ERROR',err);
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
        var newControl = {'control':req.body.control};

        Control.create(newControl)
            .then(function(control){
                res.status(201).json({
                    'control' : control.toJSON()
                });
            });
    })
    //GET
    .get(function(req,res,next){
        var id = req.params.id;

        if(!id){
            return next();
        }

        Control.findById(id,function(err,control){
            if(!control){
                res.status(404).send({});
            }

            res.json({
                'control' : control
            });
        });
    })
    //DELETE
    .delete(function(req,res){
        var id = req.params.id;

        Control.remove({_id:id},function(){
            res.status(204).send({});
        });
    });

module.exports = controls;
