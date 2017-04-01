const getMyList = require('../../goods/getMyList')

const assert = require('assert')

describe('getMyList', () => {
  it('getMyList success', (done) => {
    getMyList('141320231').then((result) => {
      assert.equal(result.length === 0, false)
      done()
    })
  })
})
