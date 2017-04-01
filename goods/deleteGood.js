const find = require('./find')
const goodsWithUserModel = require('../goodsAndUser/goodsWithUserModel')
module.exports = (id) => {
  return find({_id: id}).then((doc) => {
    doc.remove()
    // console.log(doc)
    goodsWithUserModel.findOne({studentNum: doc.ownNum})
    .then((doc) => {
      let index
      if (doc.goodsIdList.indexOf(id) !== -1) {
        index = doc.goodsIdList.indexOf(id)
        // console.log(index)
        doc.goodsIdList.splice(index, 1)
        doc.save()
      }
    })
  })
}
