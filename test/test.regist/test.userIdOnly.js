const fieldIsOnly = require('../../registration/fieldIsOnly')
const saveUserInformation = require('../../registration/saveUserInformation')
const assert = require('assert')

describe('userId only', () => {
  it.skip('return false ', (done) => {
    let userInformation = {
      userId: 'admin',
      password: '2101239xwt',
      studentNum: '141320231',
      idCardNum: '627261'
    }
    saveUserInformation(userInformation, (err, user) => {
      if (err) done(err)
      fieldIsOnly({userId: userInformation.userId}, (is) => {
        assert.equal(is, false)
        user.remove()
        done()
      })
    })
  })

  it.skip('return true ', (done) => {
    let userInformation = {
      userId: 'notExit',
      password: '2101239xwt',
      studentNum: '141320231',
      idCardNum: '627261'
    }
    fieldIsOnly({userId: userInformation.userId}, (is) => {
      assert.equal(is, true)
      done()
    })
  })
})
