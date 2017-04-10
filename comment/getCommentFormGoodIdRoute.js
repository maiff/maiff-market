let router = require('../lib/MyExpress')()

const sendJson = require('../lib/sendJson')
router.use(sendJson())

const query = require('../lib/query')
router.use(query())


const find = require('./find')

router.get((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let goodId = req.query.goodId
  find({goodId: goodId})
  .then((doc) => {
    res.json(doc)
  }, (err) => {
    res.json({err: err})
  })
})

module.exports = router
