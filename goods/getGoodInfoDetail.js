let router = require('../lib/MyExpress')()

const cookieParser = require('cookie-parser')
router.use(cookieParser())

const sendJson = require('../lib/sendJson')
router.use(sendJson())

const query = require('../lib/query')
router.use(query())

let isAuto = require('../login/isAuto')

const find = require('./find')

const baseImgUrl = require('./baseImgUrl')
router.get((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let id = req.query.id
  if (isAuto(req.cookies, res, () => {
    find({_id: id}).then((doc) => {
      doc.imgUrl[0] ? null : doc.imgUrl[0] = baseImgUrl
      doc.contact.is = doc.contact.is.slice(0, 4)
      doc.own = doc.own.slice(0, 1)
      doc.ownNum = ''
      res.json(doc)
    })
  })) {
    find({_id: id}).then((doc) => {
      doc.imgUrl[0] ? null : doc.imgUrl[0] = baseImgUrl
      doc.ownNum = ''
      res.json(doc)
    })
  }
})

module.exports = router
