const MyExpress = require('./lib/MyExpress')
const serveStatic = require('serve-static')
const path = require('path')

let app = MyExpress()

// Add static server
app.use(serveStatic(path.join(__dirname, '/public/dist'), {
  maxAge: '1d',
  setHeaders: setCustomCacheControl
}))


app.listen(8080, () => {
  console.log('listen port 8080')
})

function setCustomCacheControl (res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
  // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}
