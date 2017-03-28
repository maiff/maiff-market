import baseUrl from '../common/baseUrl.js'
import axios from 'axios'

function upload (file) {
  let formData = new window.FormData()
  formData.append('img', file)
  return axios.post(`${baseUrl}/uploadimg`, formData).then((res) => {
    return res.data
  })
}

export default upload
