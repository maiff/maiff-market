import baseUrl from '../common/baseUrl.js'
import axios from 'axios'
import store from '../../store/'

function registPost (fn) {
  axios.post(`${baseUrl}/regist`, {
    userId: store.state.register.username,
    studentNum: store.state.register.stuNum,
    idCardNum: store.state.register.idCard,
    password: store.state.register.password
  },
    {
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
      transformRequest: [function (data) {
        // Do whatever you want to transform the data
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }]
    }).then((data) => {
      fn && fn(data)
    })
}

export default registPost
