const UserModel = require('./userModel')
const logger = require('../log/log')



module.exports = (userInformation) => {
  let user = new UserModel({
    userId: userInformation.userId,
    password: userInformation.password,
    studentNum: userInformation.studentNum,
    idCardNum: userInformation.idCardNum
  })
  return new Promise((resolve, reject) => {
    user.save((err, user) => {
      if (err) {
        logger.error(err)
        reject(err)
      } else {
        logger.trace('[' + userInformation.userId + '] saved.')
        resolve(user)
      }
    })
  })
}



