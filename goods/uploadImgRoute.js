let router = require('../lib/MyExpress')()

const sendJson = require('../lib/sendJson')
router.use(sendJson())

const cookieParser = require('cookie-parser')
router.use(cookieParser())


let multer = require('multer')
let upload = multer({dest: './upload'}).single('img')

let uploadImg = require('../qiniuImg/uploadImg')
let baseUrl = require('../qiniuImg/baseUrl')

const logger = require('../log/log')

let isAuto = require('../login/isAuto')

router.post((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  // console.log(req.cookies)
  if (isAuto(req.cookies, res)) {
    upload(req, res, function (err) {
      if (err) {
        logger.error(err)
      }
      uploadImg('./upload/' + req.file.filename, req.file.filename).then((ret) => {
        res.json({
          url: `${baseUrl}${req.file.filename}`
        })
      })
      // 一切都好
    })
  }
})

module.exports = router
