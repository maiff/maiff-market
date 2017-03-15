let router = require('../lib/MyExpress')()
const bodyParser = require('body-parser')
const sendJson = require('../lib/sendJson')


let Form = require('../lib/node-form-comfirm')
const logger = require('../log/log')

const getID = require('./getID')
const getName = require('./getName')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(sendJson())

const fieldIsOnly = require('./fieldIsOnly')
const saveUserInformation = require('./saveUserInformation')


router.post((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  // console.log(req.body)
  let body = req.body
  let user = {}
  user.password = body.password
  user.studentNum = body.studentNum
  user.idCardNum = body.idCardNum

  let formFlag = false
  let form = new Form()
  form.addValidator('isPassword', (text) => {
    let passR = /[a-zA-Z]/
    if (text && text.length >= 6 && passR.test(text)) return { success: true }
    return {
      success: false,
      msg: '请输入符合规则的密码（长度大于等于6，且至少包含字母）'
    }
  })

  form.add(user.password, {
    label: '密码',
    validators: ['required', 'isPassword'],
    code: -2 // 缺少密码，或者不符合规则
  }).add(user.idCardNum, {
    label: '身份证后六位',
    validators: ['required'],
    code: -3 // 缺少idCard
  }).add(user.studentNum, {
    label: '学号',
    validators: ['required'],
    code: -4 // 缺少学号
  })
  form.on('validateError', (e, msg) => {
    formFlag || res.json({
      status: e.code,
      msg: msg
    })
    formFlag = true
  })
  form.validate(() => {
    getID(user.studentNum).then((id) => {
      if (user.idCardNum === id.slice(-6, 18)) {
        return getName(user.studentNum)
      } else {
        res.json({
          status: -5, // 学号身份证后六位不匹配
          msg: '学号身份证后六位不匹配'
        })
        throw new Error('学号身份证后六位不匹配')
      }
    }, (err) => {
      res.json(err)
    }).then((name) => {
      user.name = name
      return fieldIsOnly({studentNum: user.studentNum})
    }, (err) => {
      res.json(err)
      throw new Error('获取名字出错')
    }).then((is) => {
      return saveUserInformation(user)
    }, (is) => {
      res.json({
        status: -6, // 学号已被注册
        msg: '学号已被注册'
      })
      throw new Error('学号已被注册')
    }).then((user) => {
      res.json({
        status: 1, // 成功
        msg: '成功！'
      })
    }, (err) => {
      res.json(err)
    }).catch((err) => {
      logger.error(err.message)
    })
  })
})

module.exports = router
