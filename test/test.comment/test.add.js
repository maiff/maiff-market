const addCommentRoute = require('../../comment/addCommentRoute')
const request = require('supertest')
const connect = require('../../lib/MyExpress')
const assert = require('assert')
let onlineUser = require('../../login/onlineUser')
describe('add comment', () => {
  it('add success', (done) => {
    let app = connect()
    app.use('/add', addCommentRoute)
    let key = onlineUser.add(141320231, '向王涛')
    app.listen(0, function () {
      request(app)
      .post('/add')
      .set('Cookie', `sessionId=${key}`)
      .type('form')
      .send({
        goodId: '58eb91da37d0021335a26d52',
        content: '哇！好棒啊！'
      })
      // .expect('Content-Type', /json/)
      // .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.text)
        assert.equal(JSON.parse(res.text).status, 1)
        done()
      })
    })
  })
})

