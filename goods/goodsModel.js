const mongoose = require('../connectDB/connect')
const Schema = mongoose.Schema

let good = new Schema({
  name: {
    type: String,
    required: [true, 'name required']
  },
  price: {
    type: Number,
    min: [0, 'price should not less than 0']
  },
  contact: {
    what: {
      type: String,
      enum: ['QQ', 'WX', 'phone'],
      message: 'must be QQ WX phone'
    },
    is: {
      type: String,
      required: [true, 'contact value required']
    }
  },
  detail: String,
  time: String,
  imgUrl: [String],
  own: String
})

let goodsModel = mongoose.model('goodsModel', good)

module.exports = goodsModel


