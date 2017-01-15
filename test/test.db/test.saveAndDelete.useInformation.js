const saveUserInformation = require('../../registration/saveUserInformation')
const deletCollectionByField = require('../../registration/deletCollectionByField')
describe('db save user information', () => {
  it('save information', (done) => {
    let userInformation = {
      userId: 'admin',
      password: '2101239xwt',
      studentNum: '141320231',
      idCardNum: '627261'
    }
    saveUserInformation(userInformation).then((user) => {
      done()
    }, done)
  })
  it('delete information', (done) => {
    deletCollectionByField({userId: 'admin'}).then((user) => {
      done()
    }, done)
  })
})

