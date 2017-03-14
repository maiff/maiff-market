const request = require('superagent')
const logger = require('../log/log')

const cheerio = require('cheerio')
const getCookie = require('./getCookie')

module.exports = (stuNum) => {
  return new Promise((resolve, reject) => {
    getCookie().then((cookies) => {
      request.get(`http://218.193.151.40/spims/healinput.do?method=sportcf&xh=${stuNum}`)
      .set('Cookie', cookies)
      .end(function (err, res) {
        if (err) {
          logger.error('error')
          reject(err)
        } else {
          let html = res.text
          let $ = cheerio.load(html)
          let stdName = $('table').eq(0).find('tr').eq(1).find('td[width="10%"]').eq(0).text().trim()
          resolve(stdName)
        }
      })
    })
  })
}

