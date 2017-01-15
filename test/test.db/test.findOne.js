const findOne = require('../../registration/findOne')

describe('find one test', () => {
  it.skip('find exist one', (done) => {
    findOne({userId: 'admin'}).then((user) => {
      if (user != null) done()
    }, done)
  })

  it.skip('find not exist one', (done) => {
    findOne({userId: 'admin2'}).then((user) => {
      if (user === null) done()
    }, done)
  })
})

