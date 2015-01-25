var request = require('supertest-as-promised');
var api = require('../server.js');
var host = process.env.API_TEST_HOST || api;

request = request(host);

describe('recurso /control',function(){

    describe('POST',function(){
        it('make new control', function(done){
            var data = {
                "control" : {
                    "date" : "15-12-2014",
                    "time" : "15:30:12",
                    "glucose" : "140",
                    "insulin" : "12",
                    "type" : "quickly",
                    "daytime" : "breakfast",
                    "note" : "something"
                }
            };

            request
                .post('/api/control')
                .set('Accept','application/json')
                .send(data)
                .expect(201)
                .expect('Content-Type',/application\/json/)
                .end(function(err,res){
                    var body = res.body;
                    expect(body).to.have.property('controls');
                    var control = body.controls;

                    //properties
                    expect(control).to.have.property('date','15-12-2014');
                    expect(control).to.have.property('time','15:30:12');
                    expect(control).to.have.property('glucose','140');
                    expect(control).to.have.property('insulin','12');
                    expect(control).to.have.property('type','quickly');
                    expect(control).to.have.property('daytime','breakfast');
                    expect(control).to.have.property('note','something');
                    expect(control).to.have.property('id');
                    done();
                });
        });
    });

    describe('GET',function(){
        it('should get existing control', function(done){
            var data = {
                "control" : {
                    "date" : "15-12-2014",
                    "time" : "15:30:12",
                    "glucose" : "140",
                    "insulin" : "12",
                    "type" : "quickly",
                    "daytime" : "breakfast",
                    "note" : "something"
                }
            };

            request
            .post('/api/control')
            .set('Accept','application/json')
            .send(data)
            .expect(201)
            .end(function(err,res){

                var id = res.body.controls.id;

                request
                    .get('/api/control/'+id)
                    .expect(200)
                    .expect('Content-Type',/application\/json/)
                    .end(function(err,res){
                        var control = res.body.controls;

                        expect(control).to.have.property('date','15-12-2014');
                        expect(control).to.have.property('time','15:30:12');
                        expect(control).to.have.property('glucose','140');
                        expect(control).to.have.property('insulin','12');
                        expect(control).to.have.property('type','quickly');
                        expect(control).to.have.property('daytime','breakfast');
                        expect(control).to.have.property('note','something');
                        expect(control).to.have.property('id',id);
                    });
                done();
            });
        });
    });
});
