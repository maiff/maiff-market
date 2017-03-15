const hash = require('../lib/hash')

class OnlineUser {
  constructor () {
    this.allUser = {}
    this.checkStatus()
  }
  add (studentNum) {
    let that = this.allUser
    let key = hash(`${studentNum}${new Date().getTime()}`)
    that[key] = {
      lastUse: new Date().getTime()
    }
    let user = studentNum
    Object.defineProperty(that[key], 'studentNum', {
      get: function () {
        let nowTime = new Date().getTime()
        let gap = 1000 * 60 * 60
        // console.log(user)
        if (nowTime - that[key].lastUse > gap) {
          that[key] = undefined
          // console.log(that[key])
        } else {
          that[key].lastUse = nowTime
          return user
        }
      }
    })

    return key
  }

  get (key) {
    return this.allUser[key]
  }
  checkStatus () {
    let timeGap = 1000 * 60 * 60
    let allUser = this.allUser
    setInterval(() => {
      let nowTime = new Date().getTime()
      for (let i in allUser) {
        if (allUser[i] === undefined || nowTime - allUser[i].lastUse > timeGap) {
          // allUser[i] = undefined
          // console.log(this.allUser)
          delete allUser[i]
          // console.log(this.allUser)
        }
      }
    }, timeGap)
  }
}
let onlineUser = new OnlineUser()
module.exports = onlineUser
