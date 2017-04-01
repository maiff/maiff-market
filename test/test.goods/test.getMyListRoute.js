const getMyListRoute = require('../../goods/getMyListRoute')
const request = require('supertest')
const connect = require('../../lib/MyExpress')
const assert = require('assert')
let onlineUser = require('../../login/onlineUser')
describe('getMyListRoute', () => {
  it('getMyListRoute success', (done) => {
    let app = connect()
    app.use('/getMyList', getMyListRoute)
    let key = onlineUser.add(141320231, '向王涛')
    app.listen(0, function () {
      request(app)
      .get('/getMyList')
      .set('Cookie', `sessionId=${key}`)
      // .expect('Content-Type', /json/)
      // .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.text)
        assert.equal(JSON.parse(res.text).length === 0, false)
        done()
      })
    })
  })

  it('getMyListRoute fail without login', (done) => {
    let app = connect()
    app.use('/getMyList', getMyListRoute)
    app.listen(0, function () {
      request(app)
      .get('/getMyList')
      // .expect('Content-Type', /json/)
      // .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.text)
        assert.equal(JSON.parse(res.text).error, '请先登录')
        done()
      })
    })
  })
})

