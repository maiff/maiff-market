const registRounter = require('../../registration/registRoute')
const request = require('supertest')
const connect = require('../../lib/MyExpress')
const assert = require('assert')
const deletCollectionByField = require('../../registration/deletCollectionByField')

describe('registration', () => {
  it('regist success', (done) => {
    let app = connect()
    app.use('/regist', registRounter)
    app.listen(0, function () {
      request(app)
      .post('/regist')
      .type('form')
      .send({
        password: '201239xwt',
        studentNum: '141320231',
        idCardNum: '272612'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        assert.equal(JSON.parse(res.text).status, 1)
        done()
      })
    })
  })

  it('regist fail without password', (done) => {
    let app = connect()
    app.use('/regist', registRounter)
    app.listen(0, function () {
      request(app)
      .post('/regist')
      .type('form')
      .send({
        studentNum: '141320231',
        idCardNum: '272612'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        assert.equal(JSON.parse(res.text).status, -2)
        done()
      })
    })
  })

  it('regist fail with id suit of stuNum', (done) => {
    let app = connect()
    app.use('/regist', registRounter)
    app.listen(0, function () {
      request(app)
      .post('/regist')
      .type('form')
      .send({
        userId: 'test2',
        password: '201239xwt',
        studentNum: '141320231',
        idCardNum: '2726121'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        assert.equal(JSON.parse(res.text).status, -5)
        done()
      })
    })
  })

  it('regist fail without some same studentNum', (done) => {
    let app = connect()
    app.use('/regist', registRounter)
    app.listen(0, function () {
      request(app)
            .post('/regist')
            .type('form')
            .send({
              userId: 'test2',
              password: '201239xwt',
              studentNum: '141320231',
              idCardNum: '272612'
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
              if (err) return done(err)
              assert.equal(JSON.parse(res.text).status, -6)
              deletCollectionByField({userId: 'test'})
              done()
            })
    })
  })
})
