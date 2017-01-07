const UserModel = require('./userModel')

const logger = require('../log/log')


module.exports = (userInformation, fn) => {
  let user = new UserModel({
    userId: userInformation.userId,
    password: userInformation.password,
    studentNum: userInformation.studentNum,
    idCardNum: userInformation.idCardNum
  })

  user.save((err, user) => {
    if (err) {
      logger.error(err)
    } else {
      logger.trace('[' + userInformation.userId + '] saved.')
      fn(null, user)
    }
  })
}

