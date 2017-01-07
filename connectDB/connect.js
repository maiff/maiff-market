// 导入mongoose库
const mongoose = require('mongoose')

// 获得db对象
let db = mongoose.connection

let url = 'mongodb://127.0.0.1:12345/maiffMarket'

mongoose.connect(url)
const logger = require('../log/log')

db.on('error', () => logger.error('connection error:'))
db.on('open', () => {
  logger.trace('db open')
})

db.on('connected', () => {
  logger.trace('db connected')
})

db.on('disconnected', () => {
  logger.trace('db disconnected')
})


module.exports = mongoose
// mongoose.disconnect();

// var Schema = mongoose.Schema;
// var testSchema=new Schema({
//   name:String
// });

// var testModel = mongoose.model('Test', testSchema);

// var test = new testModel({name:'样亲亲'});

// test.save((err, test)=>{
// if (err) {
//  console.log(err);
//  } else {
