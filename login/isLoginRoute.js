let router = require('../lib/MyExpress')()
const sendJson = require('../lib/sendJson')
const cookieParser = require('cookie-parser')

router.use(sendJson())
router.use(cookieParser())

let onlineUser = require('./onlineUser')
// let onlineUser = new OnlineUser()
router.get((req, res) => {
   // 对ajax提供的验证凭证进行二次验证
  res.setHeader('Access-Control-Allow-Origin', '*')
  // console.log('Cookies: ', req.cookies)
  let cookies = req.cookies
  let userObj = onlineUser.get(cookies['sessionId'])
  if (userObj !== undefined) {
    res.json({
      status: 1
    })
  } else {
    res.json({
      status: 0
    })
  }
  // console.log()
})

module.exports = router
