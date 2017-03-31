const queryGood = require('../../goods/queryGood')
const assert = require('assert')

describe('query ', () => {
  it('limit 10', (done) => {
    queryGood(10).then((doc) => {
      assert.equal(10, doc.length)
      done()
    })
  })
  it('limit 20', (done) => {
    queryGood(20).then((doc) => {
      assert.equal(doc.length <= 20, true)
      done()
    })
  })
})
