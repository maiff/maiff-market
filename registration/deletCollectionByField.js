const UserModel = require('./userModel')
const logger = require('../log/log')

module.exports = (obj, fn) => {
  UserModel.findOne(obj, (err, user) => {
    if (err) {
      logger.error(err)
    } else {
      user.remove()
      fn && fn(null, user)
    }
  })
}
