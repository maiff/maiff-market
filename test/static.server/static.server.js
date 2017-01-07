const connect = require('../../lib/MyExpress')
const request = require('supertest')
const serveStatic = require('serve-static')
const path = require('path')


describe('static.server()', function () {
  var app = connect();
  app.use(serveStatic(path.join(__dirname, '/public'), {
      maxAge: '1d',
      setHeaders: setCustomCacheControl
  }))


  it('get no path ', function(done){
    app.listen(0, function(){
      request(app)
      .get('/index')
      .expect(404, done);
    });

  });

  it('get index.html ', function(done){
    
    app.listen(0, function(){
      request(app)
      .get('/index.html')
      .expect(200, done);
    });

  });


  it('post index.html ', function(done){
    
    app.listen(0, function(){
      request(app)
      .post('/index.html')
      .expect(404, done);
    });

  });

});


 function setCustomCacheControl (res, path) {
    if (serveStatic.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
      res.setHeader('Cache-Control', 'public, max-age=0')
    }
}