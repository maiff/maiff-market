const addGoodRoute = require('../../goods/addGoodRoute')
const request = require('supertest')
const connect = require('../../lib/MyExpress')
const assert = require('assert')
let onlineUser = require('../../login/onlineUser')
describe('add', () => {
  it('add success', (done) => {
    let app = connect()
    app.use('/add', addGoodRoute)
    let key = onlineUser.add(141320231, '向王涛')
    app.listen(0, function () {
      request(app)
      .post('/add')
      .set('Cookie', `sessionId=${key}`)
      .type('form')
      .send({
        name: 'test',
        price: 100,
        contactType: 'QQ',
        contactValue: '15216852305',
        detail: 'only to test',
        imgUrl: 'test||test'
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

  it('add fail with name', (done) => {
    let app = connect()
    app.use('/add', addGoodRoute)
    let key = onlineUser.add(141320231, '向王涛')
    app.listen(0, function () {
      request(app)
      .post('/add')
      .set('Cookie', `sessionId=${key}`)
      .type('form')
      .send({
        price: 100,
        contactType: 'QQ',
        contactValue: '15216852305',
        detail: 'only to test',
        imgUrl: 'test||test'
      })
      // .expect('Content-Type', /json/)
      // .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.text)
        assert.equal(JSON.parse(res.text).err, 'name required')
        done()
      })
    })
  })

  it('add fail with degree price', (done) => {
    let app = connect()
    app.use('/add', addGoodRoute)
    let key = onlineUser.add(141320231, '向王涛')
    app.listen(0, function () {
      request(app)
      .post('/add')
      .set('Cookie', `sessionId=${key}`)
      .type('form')
      .send({
        name: 'test',
        price: -100,
        contactType: 'QQ',
        contactValue: '15216852305',
        detail: 'only to test',
        imgUrl: 'test||test'
      })
      // .expect('Content-Type', /json/)
      // .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.text)
        assert.equal(JSON.parse(res.text).err, 'price should not less than 0')
        done()
      })
    })
  })

  it('add fail with not QQ', (done) => {
    let app = connect()
    app.use('/add', addGoodRoute)
    let key = onlineUser.add(141320231, '向王涛')
    app.listen(0, function () {
      request(app)
      .post('/add')
      .set('Cookie', `sessionId=${key}`)
      .type('form')
      .send({
        name: 'test',
        price: 100,
        contactType: 'QQw',
        contactValue: '15216852305',
        detail: 'only to test',
        imgUrl: 'test||test'
      })
      // .expect('Content-Type', /json/)
      // .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.text)
        assert.equal(JSON.parse(res.text).err, '`QQw` is not a valid enum value for path `contact.what`.')
        done()
      })
    })
  })

  it('add fail without value', (done) => {
    let app = connect()
    app.use('/add', addGoodRoute)
    let key = onlineUser.add(141320231, '向王涛')
    app.listen(0, function () {
      request(app)
      .post('/add')
      .set('Cookie', `sessionId=${key}`)
      .type('form')
      .send({
        name: 'test',
        price: 100,
        contactType: 'QQ',
        contactValue: '',
        detail: 'only to test',
        imgUrl: 'test||test'
      })
      // .expect('Content-Type', /json/)
      // .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.text)
        assert.equal(JSON.parse(res.text).err, 'contact value required')
        done()
      })
    })
  })
})

