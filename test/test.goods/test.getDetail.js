const getGoodInfoDetail = require('../../goods/getGoodInfoDetail')
const request = require('supertest')
const connect = require('../../lib/MyExpress')
const assert = require('assert')
let onlineUser = require('../../login/onlineUser')
describe('get detail', () => {
  it('get detail login', (done) => {
    let app = connect()
    app.use('/get', getGoodInfoDetail)
    let key = onlineUser.add(141320231, '向王涛')
    app.listen(0, function () {
      request(app)
      .get('/get')
      .set('Cookie', `sessionId=${key}`)
      .query({ id: '58dc85ff173a2d2b4121a271' })
      // .expect('Content-Type', /json/)
      // .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.text)
        assert.equal(JSON.parse(res.text).own.length, 3)
        done()
      })
    })
  })

  it('get detail without login', (done) => {
    let app = connect()
    app.use('/get', getGoodInfoDetail)
    app.listen(0, function () {
      request(app)
      .get('/get')
      .query({ id: '58dc85ff173a2d2b4121a271' })
      // .expect('Content-Type', /json/)
      // .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.text)
        assert.equal(JSON.parse(res.text).own.length, 1)
        done()
      })
    })
  })
})

