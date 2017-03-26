const saveGoodsInformation = require('../../goods/saveGoodsInformation')
const assert = require('assert')

describe('save information', () => {
  it('all right', (done) => {
    let data = new Date().toString()
    let good = {
      name: 'test',
      price: 100,
      detail: '只是测试',
      time: data,
      imgUrl: ['test', 'test'],
      own: 'test',
      contact: {
        what: 'QQ',
        is: 15216852305
      }
    }
    saveGoodsInformation(good).then((good) => {
      // console.log(good.id)
      assert.equal(good != null, true)
      good.remove()
      done()
    })
  })

  it('degree price', (done) => {
    let data = new Date().toString()
    let good = {
      name: 'test',
      price: -100,
      detail: '只是测试',
      own: 'test',
      time: data,
      imgUrl: ['test', 'test'],
      contact: {
        what: 'QQ',
        is: 15216852305
      }
    }
    saveGoodsInformation(good).catch((err) => {
      assert.equal(err.errors['price'].message, 'price should not less than 0')
      done()
    })
  })

  it('name is empty', (done) => {
    let data = new Date().toString()
    let good = {
      name: '',
      price: 100,
      detail: '只是测试',
      own: 'test',
      time: data,
      imgUrl: ['test', 'test'],
      contact: {
        what: 'QQ',
        is: 15216852305
      }
    }
    saveGoodsInformation(good).catch((err) => {
      assert.equal(err.errors['name'].message, 'name required')
      done()
    })
  })

  it('contact what not emum', (done) => {
    let data = new Date().toString()
    let good = {
      name: 'test',
      price: 100,
      detail: '只是测试',
      own: 'test',
      time: data,
      imgUrl: ['test', 'test'],
      contact: {
        what: 'ds',
        is: 15216852305
      }
    }
    saveGoodsInformation(good).catch((err) => {
      assert.equal(err.errors['contact.what'].message, '`ds` is not a valid enum value for path `contact.what`.')
      // console.log(err.errors['contact.what'].message)
      done()
    })
  })

  it('contact value is empty', (done) => {
    let data = new Date().toString()
    let good = {
      name: 'test',
      price: 100,
      detail: '只是测试',
      own: 'test',
      time: data,
      imgUrl: ['test', 'test'],
      contact: {
        what: 'QQ',
        is: ''
      }
    }
    saveGoodsInformation(good).catch((err) => {
      assert.equal(err.errors['contact.is'].message, 'contact value required')
      // console.log(err.errors['contact.what'].message)
      done()
    })
  })
})
