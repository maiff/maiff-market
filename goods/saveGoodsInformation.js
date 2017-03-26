const GoodsModel = require('./goodsModel')

module.exports = (goodsInformation) => {
  let good = new GoodsModel()
  good.name = goodsInformation.name
  good.price = goodsInformation.price
  good.detail = goodsInformation.detail
  good.time = goodsInformation.time
  good.own = goodsInformation.own
  good.imgUrl.push(...goodsInformation.imgUrl)
  good.contact = goodsInformation.contact
  good.markModified('contact')
  return good.save()
}
