const connect = require('../../lib/MyExpress')
const sendJson = require('../../lib/sendJson')
const request = require('supertest')
const assert = require('assert')

describe('app res.json', function () {
  it('contentType~json', function (done) {
    let app = connect()
    app.use(sendJson())
    app.use('/', function (req, res) {
      res.json()
    })

    app.listen(0, function () {
      request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        done()
      })
    })
  })

  it('200 and content is right', function (done) {
    let app = connect()
    app.use(sendJson())
    app.use('/', function (req, res) {
      res.json({test: 1})
    })

    app.listen(0, function () {
      request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        assert.equal(res.text, JSON.stringify({test: 1}))
        done()
      })
    })
  })

  it('json(Error)', function (done) {
    let app = connect()
    app.use(sendJson())
    app.use('/', function (req, res) {
      res.json(new Error('test'))
    })

    app.listen(0, function () {
      request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(500)
      .end((err, res) => {
        if (err) return done(err)
        assert.equal(res.text, JSON.stringify({error: 'test'}))
        done()
      })
    })
  })
})
