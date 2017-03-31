import baseUrl from '../common/baseUrl'
import get from '../common/get'
import store from '../../store/'

function listGet () {
  return get(`${baseUrl}/getGoodInfo`, {
    count: store.state.mainList.count
  })
}

export default listGet
