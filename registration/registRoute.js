let router = require('../lib/MyExpress')()
const bodyParser = require('body-parser')
const sendJson = require('../lib/sendJson')

const getID = require('./getID')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(sendJson())

const userIdIsOnly = require('./userIdIsOnly')
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
    getID(user.studentNum, (err, id) => {

      console.log(id)
      if (err) res.json(err)
      if (user.idCardNum === id.slice(-6, 18)) {
        userIdIsOnly(user, (is) => {
          is && saveUserInformation(user, (err, user) => {
            if (err) {
              res.json(err)
            } else {
              res.json({
                status: 1 // 成功
              })
            }
          })

          is || res.json({
            status: 0// 用户名已被注册
          })
        })
      } else {
        res.json({
          status: -2 // 学号身份证后六位不匹配
        })
      }
    })
  } else {
    res.json({
      status: -1 // 缺失某些字段
    })
  }
})

module.exports = router
