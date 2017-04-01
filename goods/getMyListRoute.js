let router = require('../lib/MyExpress')()

const sendJson = require('../lib/sendJson')
router.use(sendJson())

const cookieParser = require('cookie-parser')
router.use(cookieParser())

let isAuto = require('../login/isAuto')

let getMyList = require('./getMyList')

let getUserNum = require('../login/getOnlineUserNum')

const baseImgUrl = require('./baseImgUrl')

router.get((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (isAuto(req.cookies, res)) {
    let sessionIdRow = req.cookies['sessionId'] || ''
    let sessionId = sessionIdRow.replace(/"/g, '')
    getMyList(getUserNum(sessionId)).then((goodList) => {
      let result = []
      goodList.forEach((value, index) => {
        let obj = {}
        obj.name = value.name
        obj.price = value.price
        obj.time = value.time
        obj.imgUrl = value.imgUrl[0] || baseImgUrl
        obj.id = value.id
        result.push(obj)
      })
      res.json(result)
    })
  }
})

module.exports = router
