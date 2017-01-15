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
        userId: 'test',
        password: '201239xwt',
        studentNum: '141320231',
        idCardNum: '272612'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        assert.equal(res.text, JSON.stringify({status: 1}))
        done()
      })
    })
  })

  it('regist fail without some field', (done) => {
    let app = connect()
    app.use('/regist', registRounter)
    app.listen(0, function () {
      request(app)
      .post('/regist')
      .type('form')
      .send({
        userId: 'test',
        studentNum: '141320231',
        idCardNum: '272612'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        assert.equal(res.text, JSON.stringify({status: -1}))
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
        assert.equal(res.text, JSON.stringify({status: -2}))
        done()
      })
    })
  })

  it('regist fail with some same useId', (done) => {
    let app = connect()
    app.use('/regist', registRounter)
    app.listen(0, function () {
      request(app)
            .post('/regist')
            .type('form')
            .send({
              userId: 'test',
              password: '201239xwt',
              studentNum: '141320231',
              idCardNum: '272612'
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
              if (err) return done(err)
              assert.equal(res.text, JSON.stringify({status: 0}))
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
              assert.equal(res.text, JSON.stringify({status: -3}))
              deletCollectionByField({userId: 'test'})
              done()
            })
    })
  })
})
