var MyExpress = require('..')
var serveStatic = require('serve-static')
var path = require('path')

var app = MyExpress()

// Add static server
app.use(serveStatic(path.join(__dirname, '/public'), {
  maxAge: '1d',
  setHeaders: setCustomCacheControl
}))


app.listen(3000)

function setCustomCacheControl (res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
  // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}
