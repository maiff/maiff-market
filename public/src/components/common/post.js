import axios from 'axios'

function post (url, obj) {
  return axios.post(url, obj,
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
    })
}

export default post
