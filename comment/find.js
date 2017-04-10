const CommentModel = require('./commentModel')

module.exports = (obj) => {
  return CommentModel.find(obj)
}
