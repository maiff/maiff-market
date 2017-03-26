const maintainTie = require('../../goodsAndUser/maintainTie')
const save = require('../../goodsAndUser/save')
const find = require('../../goodsAndUser/find')

const assert = require('assert')

describe('maintainTie', () => {
  it('find', (done) => {
    find({studentNum: 141320231}).then((tie) => {
      assert.equal(tie, null)
      done()
    }, done)
  })

  it('save', (done) => {
    save({studentNum: 141320231, goodsIdList: 'fgdsagfsadgafggfdssa'}).then((tie) => {
      find({studentNum: 141320231}).then((tie) => {
        assert.equal('141320231', tie.studentNum)
        done()
      }, done)
    }, done)
  })

  it('maintain', (done) => {
    maintainTie({studentNum: 141320231, goodsIdList: '343s'})
    .then((tie) => {
      tie.remove()
      done()
    })
  })
})
