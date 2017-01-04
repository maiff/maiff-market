const log4js = require('log4js')
const MyExpress = require('./lib/MyExpress')
const serveStatic = require('serve-static')
const path = require('path')

const port = 8080

var logger = log4js.getLogger('maiff-market')
logger.setLevel('trace')

let app = MyExpress()

// Add static server
app.use(serveStatic(path.join(__dirname, '/public/dist'), {
  maxAge: '1d',
  setHeaders: setCustomCacheControl
}))

app.listen(port, () => {
  logger.trace(`listen on ${port}`)
})

function setCustomCacheControl (res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
  // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}
