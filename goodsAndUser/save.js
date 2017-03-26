const GoodsWithUserModel = require('./goodsWithUserModel')

module.exports = (relation) => {
  let tie = new GoodsWithUserModel()
  tie.studentNum = relation.studentNum
  tie.goodsIdList.push(relation.goodsIdList)
  return tie.save()
}



