const getCommentFormGoodIdRoute = require('../../comment/getCommentFormGoodIdRoute')
const request = require('supertest')
const connect = require('../../lib/MyExpress')
const assert = require('assert')

describe('get comment by goodId', () => {
  it('get success', (done) => {
    let app = connect()
    app.use('/', getCommentFormGoodIdRoute)

    app.listen(0, function () {
      request(app)
      .get('/')
      .query({ goodId: '58eb91da37d0021335a26d52' })
      // .expect('Content-Type', /json/)
      // .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        console.log(res.text)
        assert.equal(JSON.parse(res.text).length === 0, false)
        done()
      })
    })
  })
})

