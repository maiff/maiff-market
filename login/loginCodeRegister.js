let router = require('../lib/MyExpress')()
const bodyParser = require('body-parser')
const sendJson = require('../lib/sendJson')

router.use(sendJson())
router.use(bodyParser.urlencoded({ extended: false }))

let mobileGeetest = require('../geetestKey')
router.get(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
    // 向极验申请每次验证所需的challenge
  mobileGeetest.register().then(function (data) {
    if (!data.success) {
            // 进入 failback，如果一直进入此模式，请检查服务器到极验服务器是否可访问
            // 可以通过修改 hosts 把极验服务器 api.geetest.com 指到不可访问的地址

            // 为以防万一，你可以选择以下两种方式之一：

            // 1. 继续使用极验提供的failback备用方案
      res.json(data)

            // 2. 使用自己提供的备用方案
            // todo
    } else {
            // 正常模式
      res.json(data)
    }
  }, function (err) {
    console.error(err)
  })
})

module.exports = router
