const getID = require('../../registration/getID')
const assert = require('assert')
describe('get ID', () => {
  it.skip('get ID', (done) => {
    getID('141320231', (err, id) => {
      assert.equal(id, '342501199606272612')
      err && done(err)
      done()
    })
  })
})
