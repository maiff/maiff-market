const uploadImgRounter = require('../../goods/uploadImgRoute')
const request = require('supertest')
const connect = require('../../lib/MyExpress')
const assert = require('assert')
let onlineUser = require('../../login/onlineUser')
describe('upload', () => {
  it('upload success', (done) => {
    let app = connect()
    app.use('/upload', uploadImgRounter)
    let key = onlineUser.add(141320231, '向王涛')
    app.listen(0, function () {
      request(app)
      .post('/upload')
      .set('Cookie', `sessionId=${key}`)
      .attach('img', '/home/mmx/图片/test.png')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.text)
        assert.equal(!!JSON.parse(res.text).url, true)
        done()
      })
    })
  })
  it('upload fail without logining', (done) => {
    let app = connect()
    app.use('/upload', uploadImgRounter)
    // let key = onlineUser.add(141320231)
    app.listen(0, function () {
      request(app)
      .post('/upload')
      // .set('Cookie', `sessionId=${key}`)
      .attach('img', '/home/mmx/图片/test.png')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.text)
        assert.equal(JSON.parse(res.text).error, '请先登录')
        done()
      })
    })
  })

})
