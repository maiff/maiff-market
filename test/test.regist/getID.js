const getID = require('../../registration/getID')
const assert = require('assert')

describe('get ID', () => {
  it.skip('get ID', (done) => {
    getID('141320231').then((stuID) => {
      assert.equal('342501199606272612', stuID)
      done()
    }, done)
  })
})
