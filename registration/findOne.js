const UserModel = require('./userModel')
const logger = require('../log/log')

module.exports = (obj) => {
  return new Promise((resolve, reject) => {
    UserModel.findOne(obj, (err, user) => {
      if (err) {
        logger.error(err)
        reject(err)
      } else {
        resolve(user)
      }
    })
  })
}
