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

const loginRegist = require('./login/loginCodeRegister')
app.use('/loginRegist', loginRegist)

const login = require('./login/loginRoute')
const isLogin = require('./login/isLoginRoute')
app.use('/login', login)
app.use('/isLogin', isLogin)

const uploadImg = require('./goods/uploadImgRoute')
app.use('/uploadimg', uploadImg)

const addGood = require('./goods/addGoodRoute')
app.use('/addGood', addGood)

app.listen(port, () => {
  logger.trace(`listen on ${port}`)
})

function setCustomCacheControl (res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
  // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}
