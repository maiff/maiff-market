let router = require('../lib/MyExpress')()
const sendJson = require('../lib/sendJson')
const cookieParser = require('cookie-parser')

router.use(sendJson())
router.use(cookieParser())

let isAuto = require('./isAuto')
// let onlineUser = new OnlineUser()
router.get((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  // console.log('Cookies: ', req)
  // console.log(sessionId, sessionId.replace(/"/g, ''))
  if (isAuto(req.cookies, res)) {
    res.json({
      status: 1
    })
  }
  // console.log()
})

module.exports = router
