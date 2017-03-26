// const goodsWithUserModel = require('./goodsWithUserModel')
// const logger = require('../log/log')
const find = require('./find')
const save = require('./save')

// 先找是否有这样的关系有的话直接push没有的话新建保存
module.exports = (relation) => {
  return find(relation).then((tie) => {
    // console.log(tie)
    if (tie !== null) {
      tie.goodsIdList.push(relation.goodsIdList)
      return tie.save()
    } else {
      return save(relation)
    }
  })
}



