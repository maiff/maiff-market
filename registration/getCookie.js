const request = require('superagent')
const logger = require('../log/log')

const num = '141320231'
const password = '2101239xwt'
module.exports = (fn) => {
  request.post('http://218.193.151.40/spims/login.do?method=load')
        .send(`UNumber=${num}&Upwd=${password}&UCode=&USnumber=%E4%B8%9C%E5%8D%8E%E5%A4%A7%E5%AD%A6&%E6%8F%90%E4%BA%A4=%E7%99%BB%E5%BD%95`)
        .end((err, res) => {
          if (err) logger.error(err)
          logger.trace('开始获取！')
          var cookies = res.header['set-cookie']
          // logger.trace(cookies)
          fn(null, cookies)
        })
}
