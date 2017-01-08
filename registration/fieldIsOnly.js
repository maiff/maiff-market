const UserModel = require('./userModel')

const logger = require('../log/log')

module.exports = (obj, fn) => {
  UserModel.findOne(obj, (err, user) => {
    if (err) {
      logger.error(err)
    } else {
      if (user !== null) fn(false)
      else fn(true)
    }
  })
}
