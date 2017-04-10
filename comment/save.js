const CommentModel = require('./commentModel')

module.exports = (commentInfo) => {
  let comment = new CommentModel(commentInfo)
  return comment.save()
}
