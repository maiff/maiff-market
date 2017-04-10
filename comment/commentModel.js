const mongoose = require('../connectDB/connect')
const Schema = mongoose.Schema

let comment = new Schema({
  goodId: {
    type: String,
    required: [true, 'goodId required']
  },
  userId: {
    type: String,
    required: [true, 'userId required']
  },
  content: {
    type: String,
    required: [true, 'content require']
  },
  time: String,
  name: String
})

let comentModel = mongoose.model('comentModel', comment)

module.exports = comentModel


