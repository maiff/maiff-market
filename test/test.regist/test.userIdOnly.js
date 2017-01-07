const userIdIsOnly = require('../../registration/userIdIsOnly')
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
    saveUserInformation(userInformation, (user) => {
      userIdIsOnly(userInformation, (is) => {
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
    userIdIsOnly(userInformation, (is) => {
      assert.equal(is, true)
      done()
    })
  })
})
