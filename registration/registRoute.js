let router = require('../lib/MyExpress')()
const bodyParser = require('body-parser')
const sendJson = require('../lib/sendJson')

const logger = require('../log/log')

const getID = require('./getID')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(sendJson())

const fieldIsOnly = require('./fieldIsOnly')
const saveUserInformation = require('./saveUserInformation')
router.post((req, res) => {
  // console.log(req.body)
  let body = req.body
  let user = {}
  user.userId = body.userId
  user.password = body.password
  user.studentNum = body.studentNum
  user.idCardNum = body.idCardNum

  if (user.userId && user.password && user.studentNum && user.idCardNum) {
    getID(user.studentNum).then((id) => {
      if (user.idCardNum === id.slice(-6, 18)) {
        return fieldIsOnly({userId: user.userId})
      } else {
        res.json({
          status: -2 // 学号身份证后六位不匹配
        })
        throw new Error('学号身份证后六位不匹配')
      }
    }, (err) => {
      res.json(err)
    }).then((is) => {
      return fieldIsOnly({studentNum: user.studentNum})
    }, (is) => {
      res.json({
        status: 0// 用户名已被注册
      })
      throw new Error('用户名已被注册')
    }).then((is) => {
      return saveUserInformation(user)
    }, (is) => {
      res.json({
        status: -3// 学号已被注册
      })
      throw new Error('学号已被注册')
    }).then((user) => {
      res.json({
        status: 1 // 成功
      })
    }, (err) => {
      res.json(err)
    }).catch((err) => {
      logger.error(err.message)
    })
  } else {
    res.json({
      status: -1 // 缺少某些字段
    })
  }
})

module.exports = router
