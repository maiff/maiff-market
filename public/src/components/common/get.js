import axios from 'axios'

function get (url, obj) {
  return axios.get(url, {
    params: obj
  })
}

export default get
