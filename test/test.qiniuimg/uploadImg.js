const uploadImg = require('../../qiniuImg/uploadImg')

describe('upload img()', function () {
  it.skip('upload test.png ', function (done) {
    uploadImg('./imgFile/test.png', 'ppp.png', done)
  })
})



