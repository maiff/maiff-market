const mongoose = require('../connectDB/connect')
const Schema = mongoose.Schema

let goodsWithUser = new Schema({
  studentNum: String,
  goodsIdList: [String]
})

let goodsWithUserModel = mongoose.model('goodsWithUserModel', goodsWithUser)

module.exports = goodsWithUserModel


