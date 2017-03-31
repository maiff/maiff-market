const goodsModel = require('./goodsModel')

module.exports = (obj) => {
  return goodsModel.findOne(obj)
}
