const connect = require('../../connectDB/connect')

describe('db connect', () => {
  it.skip('connect successully', (done) => {
    let db = connect.connection
    connect.disconnect()
    db.on('disconnected', () => {
      done()
    })
  })
})
