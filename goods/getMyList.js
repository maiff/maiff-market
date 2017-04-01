const find = require('./find')
const goodsWithUserModel = require('../goodsAndUser/goodsWithUserModel')

module.exports = function (studentNum) {
  return goodsWithUserModel.findOne({studentNum: studentNum})
  .then((doc) => {
    let resultList = []
    let goodsIdList = doc.goodsIdList
    // console.log(doc)
    goodsIdList.forEach((v, n) => {
      resultList.push(find({_id: v}))
    })
    return Promise.all(resultList)
  })
}
