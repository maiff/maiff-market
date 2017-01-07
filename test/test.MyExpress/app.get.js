var connect = require('../../lib/MyExpress');
var request = require('supertest');


describe('app.get()', function(){
  
  it('only to get not "/" ', function(done){
    var app = connect();

    app.get("/get",function(req, res){
      res.end();
    });

    app.listen(0, function(){
      request(app)
      .post('/get')
      .expect(404, done);
    });

  });

  it('only to get is "/" ', function(done){
    var app = connect();

    app.get("/",function(req, res){
      res.end();
    });

    app.listen(0, function(){
      request(app)
      .post('/')
      .expect(404, done);
    });

  });

  it('get without router ', function(done){
    var app = connect();

    app.get(function (req, res) {
      res.end();
    });

    app.listen(0, function(){
      request(app)
      .get('/')
      .expect(200, done);
    });

  });


  it('only to get is initing ', function(done){
    var app = connect();

    app.get(function(req, res){
      res.end();
    });

    app.listen(0, function(){
      request(app)
      .post('/')
      .expect(404, done);
    });

  });

});