let getOnlineUser = require('./getOnlineUser')

module.exports = function (cookies, res) {
  // console.log(cookies['sessionId'])
  let sessionIdRow = cookies['sessionId'] || ''
  let sessionId = sessionIdRow.replace(/"/g, '')
  if (getOnlineUser(sessionId) === undefined) {
    res.json({
      error: '请先登录'
    })
    return false
  }
  return true
}
