let router = require('../lib/MyExpress')()

const cookieParser = require('cookie-parser')
router.use(cookieParser())


const bodyParser = require('body-parser')
const sendJson = require('../lib/sendJson')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(sendJson())

let moment = require('moment')

let saveGoodsInformation = require('./saveGoodsInformation')

let isAuto = require('../login/isAuto')
let getOnlineUser = require('../login/getOnlineUser')
let getOnlineUserNum = require('../login/getOnlineUserNum')

let maintainTie = require('../goodsAndUser/maintainTie')

router.post((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (isAuto(req.cookies, res)) {
    let goodInformation = {};
    ({
      name: goodInformation.name,
      price: goodInformation.price,
      detail: goodInformation.detail
    } = req.body)

    goodInformation.contact = {
      what: req.body.contactType,
      is: req.body.contactValue
    }

    goodInformation.imgUrl = req.body.imgUrl.split('||')

    goodInformation.own = getOnlineUser(req.cookies['sessionId'].replace(/"/g, ''))
    goodInformation.ownNum = getOnlineUserNum(req.cookies['sessionId'].replace(/"/g, ''))

    goodInformation.time = moment().format('YYYY/MM/DD')
    // console.log(goodInformation)

    saveGoodsInformation(goodInformation)
    .then((good) => {
      return maintainTie({
        studentNum: goodInformation.ownNum,
        goodsIdList: good.id
      })
    })
    .then((tie) => {
      res.json({status: 1})
    })
    .catch((err) => {
      err = err.errors
      let message
      for (let i in err) {
        // console.log(err[i].message)
        message = err[i].message
      }
      if (err) res.json({'err': message})
    })
  }
})

module.exports = router
