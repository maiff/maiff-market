const findOne = require('./findOne')

module.exports = (obj) => {
  return new Promise((resolve, reject) => {
    findOne(obj).then((user) => {
      user.remove()
      resolve(user)
    }, reject)
  })
}
