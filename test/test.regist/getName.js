const getID = require('../../registration/getName')
const assert = require('assert')

describe('get Name', () => {
  it.skip('get Name', (done) => {
    getID('141320131').then((stuName) => {
      assert.equal('星龙', stuName)
      done()
    }, done)
  })
})
