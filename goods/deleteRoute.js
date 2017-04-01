let router = require('../lib/MyExpress')()

const cookieParser = require('cookie-parser')
router.use(cookieParser())

const bodyParser = require('body-parser')
const sendJson = require('../lib/sendJson')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(sendJson())

let deleteGood = require('./deleteGood')

let getOnlineUserNum = require('../login/getOnlineUserNum')

router.post((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let sessionIdRow = req.cookies['sessionId'] || ''
  let sessionId = sessionIdRow.replace(/"/g, '')
  if (getOnlineUserNum(sessionId) === '141320231') {
    deleteGood(req.body.id).then(() => {
      res.json({status: 1})
    })
  } else {
    res.json({error: '你不是管理员！'})
  }
})

module.exports = router
