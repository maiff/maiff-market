const logger = require('./log/log')
const MyExpress = require('./lib/MyExpress')
const serveStatic = require('serve-static')
const path = require('path')

const port = 30002



let app = MyExpress()

// Add static server
app.use(serveStatic(path.join(__dirname, '/public/dist'), {
  maxAge: '1d',
  setHeaders: setCustomCacheControl
}))

const regist = require('./registration/registRoute')

app.use('/regist', regist)





app.listen(port, () => {
  logger.trace(`listen on ${port}`)
})

function setCustomCacheControl (res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
  // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}
