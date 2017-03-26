const qiniu = require('qiniu')
const qiniukey = require('./qiniukey')
// 需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = qiniukey.AK
qiniu.conf.SECRET_KEY = qiniukey.SK

// 要上传的空间
const bucket = 'maiff-market-img'
const baseUrl = 'http://ojawyv8qo.bkt.clouddn.com/'
// 上传到七牛后保存的文件名
// let key = 'my-nodejs-logo.png'

// 构建上传策略函数
function uptoken (bucket, key) {
  var putPolicy = new qiniu.rs.PutPolicy(bucket + ':' + key)
  return putPolicy.token()
}

// 生成上传 Token


// 要上传文件的本地路径
// filePath = './test.png'

// 构造上传函数
function uploadFile (uptoken, key, localFile) {
  var extra = new qiniu.io.PutExtra()
  return new Promise((resolve, reject) => {
    qiniu.io.putFile(uptoken, key, localFile, extra, function (err, ret) {
      resolve(ret)
      err && reject(err)
    })
  })
}

// 调用uploadFile上传
module.exports = function (file, saveName) {
  let token = uptoken(bucket, saveName)
  uploadFile(token, saveName, file)
}


