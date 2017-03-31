import baseUrl from '../common/baseUrl'
import get from '../common/get'

function detailGet (id) {
  return get(`${baseUrl}/getGoodInfoDetail`, {
    id: id
  })
}

export default detailGet
