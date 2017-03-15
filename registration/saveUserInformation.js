const UserModel = require('./userModel')
const logger = require('../log/log')
const hash = require('../lib/hash')


module.exports = (userInformation) => {
  let user = new UserModel({
    name: userInformation.name,
    password: hash(userInformation.password),
    studentNum: userInformation.studentNum,
    idCardNum: userInformation.idCardNum
  })
  return new Promise((resolve, reject) => {
    user.save((err, user) => {
      if (err) {
        logger.error(err)
        reject(err)
      } else {
        logger.trace('[' + userInformation.name + '] saved.')
        resolve(user)
      }
    })
  })
}



