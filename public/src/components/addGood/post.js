import baseUrl from '../common/baseUrl'
import post from '../common/post'
import store from '../../store/'

function addPost () {
  return post(`${baseUrl}/addGood`, {
    name: store.state.goodInfo.goodName,
    price: store.state.goodInfo.goodPrice,
    detail: store.state.goodInfo.goodDetail,
    contactType: store.state.goodInfo.contactType,
    contactValue: store.state.goodInfo.contactValue,
    imgUrl: store.state.goodInfo.imgUrl.join('||')
  })
}

export default addPost
