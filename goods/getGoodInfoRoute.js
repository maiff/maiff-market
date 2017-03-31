let router = require('../lib/MyExpress')()

const sendJson = require('../lib/sendJson')
router.use(sendJson())

const query = require('../lib/query')
router.use(query())


let moment = require('moment')
const queryGood = require('./queryGood')

const baseImgUrl = require('./baseImgUrl')
router.get((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let count = req.query.count
  queryGood(count * 10).then((doc) => {
    let lowBound = (count - 1) * 10
    let hightBound = count * 10
    let rawDoc = doc.slice(lowBound, hightBound)
    let result = []
    rawDoc.forEach((value, index) => {
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
})

module.exports = router
