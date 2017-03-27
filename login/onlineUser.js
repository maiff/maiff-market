const hash = require('../lib/hash')

class OnlineUser {
  constructor () {
    this.allUser = {}
    this.checkStatus()
  }
  add (studentNum, stuName) {
    let that = this.allUser
    let key = hash(`${studentNum}${new Date().getTime()}`)
    that[key] = {
      lastUse: new Date().getTime()
    }
    let user = studentNum
    Object.defineProperty(that[key], 'studentNum', {
      get: function () {
        let nowTime = new Date().getTime()
        let gap = 60 * 60 * 1000
        // console.log(user)
        if (nowTime - that[key].lastUse > gap) {
          that[key] = undefined
          return undefined
          // console.log(that[key])
        } else {
          // console.log(1)
          that[key].lastUse = nowTime
          return user
        }
      }
    })
    let name = stuName
    Object.defineProperty(that[key], 'name', {
      get: function () {
        if (this.studentNum === undefined) return undefined
        return name
      }
    })

    return key
  }

  get (key) {
    return this.allUser[key] || {}
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
