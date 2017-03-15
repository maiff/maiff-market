const mongoose = require('../connectDB/connect')
const Schema = mongoose.Schema

let user = new Schema({
  name: String,
  password: String,
  studentNum: String,
  idCardNum: String
})

let userModel = mongoose.model('userModel', user)

module.exports = userModel


