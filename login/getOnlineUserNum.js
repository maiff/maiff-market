let onlineUser = require('./onlineUser')

module.exports = function (user) {
  return onlineUser.get(user).studentNum
}
