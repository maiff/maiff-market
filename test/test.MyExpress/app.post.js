var connect = require('../../lib/MyExpress');
var request = require('supertest');


describe('app.post()', function(){
  
  it('only to post not "/" ', function(done){
    var app = connect();

    app.post("/post",function(req, res){
      res.end();
    });

    app.listen(0, function(){
      request(app)
      .get('/post')
      .expect(404, done);
    });

  });

  it('only to post is "/" ', function(done){
    var app = connect();

    app.post("/",function(req, res){
      res.end();
    });

    app.listen(0, function(){
      request(app)
      .get('/')
      .expect(404, done);
    });

  });


  it('only to post is initing ', function(done){
    var app = connect();

    app.post(function(req, res){
      res.end();
    });

    app.listen(0, function(){
      request(app)
      .get('/')
      .expect(404, done);
    });

  });

});