const goodsWithUserModel = require('./goodsWithUserModel')


// 先找是否有这样的关系有的话直接push没有的话新建保存
module.exports = (relation) => {
  return goodsWithUserModel.findOne({studentNum: relation.studentNum})
}



