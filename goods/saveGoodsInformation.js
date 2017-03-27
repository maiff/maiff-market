const GoodsModel = require('./goodsModel')

module.exports = (goodsInformation) => {
  let good = new GoodsModel(goodsInformation)
  return good.save()
}
