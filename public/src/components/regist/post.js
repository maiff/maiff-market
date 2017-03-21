import baseUrl from '../common/baseUrl'
import post from '../common/post'
import store from '../../store/'

function registPost () {
  return post(`${baseUrl}/regist`, {
    studentNum: store.state.register.stuNum,
    idCardNum: store.state.register.idCard,
    password: store.state.register.password
  })
}

export default registPost
