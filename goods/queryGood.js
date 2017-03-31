const GoodsModel = require('./goodsModel')


module.exports = function (limit) {
  return GoodsModel
  .find({})
  .sort({_id: -1})
  .limit(limit)
  .exec()
}


