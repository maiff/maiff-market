let router = require('../lib/MyExpress')()

const cookieParser = require('cookie-parser')
router.use(cookieParser())

const bodyParser = require('body-parser')
const sendJson = require('../lib/sendJson')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(sendJson())

let moment = require('moment')

let save = require('./save')

let isAuto = require('../login/isAuto')

let getOnlineUserNum = require('../login/getOnlineUserNum')
let getOnlineUser = require('../login/getOnlineUser')
const xss = require('xss')
router.post((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (isAuto(req.cookies, res)) {
    let comment = {}
    comment.content = xss(req.body.content)
    comment.userId = getOnlineUserNum(req.cookies['sessionId'].replace(/"/g, ''))
    comment.name = getOnlineUser(req.cookies['sessionId'].replace(/"/g, ''))
    comment.time = moment().format('YYYY/MM/DD')
    comment.goodId = req.body.goodId
    // console.log(goodInformation)

    save(comment)
    .then((c) => {
      res.json({status: 1})
    })
  }
})

module.exports = router
