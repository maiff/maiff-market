const UserModel = require('./userModel')

const logger = require('../log/log')

module.exports = (userInformation, fn) => {
  UserModel.findOne({ 'userId': userInformation.userId }, (err, user) => {
    if (err) {
      logger.error(err)
    } else {
      if (user !== null) fn(false)
      else fn(true)
    }
  })
}
