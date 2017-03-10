const crypto = require('crypto')

const secret = 'love'

module.exports = function (text) {
  return crypto.createHmac('sha256', secret)
                   .update(text)
                   .digest('hex')
}