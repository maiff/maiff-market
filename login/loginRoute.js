let router = require('../lib/MyExpress')()
const bodyParser = require('body-parser')
const sendJson = require('../lib/sendJson')

router.use(sendJson())
router.use(bodyParser.urlencoded({ extended: false }))

let mobileGeetest = require('../geetestKey')

const hash = require('../lib/hash')

const find = require('../registration/findOne')

let onlineUser = require('./onlineUser')

router.post((req, res) => {
   // 对ajax提供的验证凭证进行二次验证
  res.setHeader('Access-Control-Allow-Origin', '*')
  let studentNum = req.body.studentNum
  let password = req.body.password
  mobileGeetest.validate({
    challenge: req.body.geetest_challenge,
    validate: req.body.geetest_validate,
    seccode: req.body.geetest_seccode
  }).then((success) => {
    if (!success) {
      res.json({
        status: 'fail',
        info: '登录失败'
      })
      throw new Error('登录失败')
    }
    return true
  }, (err) => {
        // 网络错误
    res.json({
      status: 'error',
      info: err
    })
  }).then((success) => {
    return find({studentNum: studentNum})
  }).then((user) => {
    if (user && hash(password) === user.password) {
      let key = onlineUser.add(studentNum, user.name)
      // console.log(onlineUser.get(key).username)
      res.json({
        status: 'success',
        info: key,
        name: user.name
      })
    } else {
      res.json({
        status: 'fail',
        info: '账号密码错误'
      })
    }
  }, (err) => {
    res.json({
      status: 'error',
      info: err
    })
  })
})

module.exports = router
