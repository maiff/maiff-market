import baseUrl from '../common/baseUrl'
import get from '../common/get'

function MyListGet (count) {
  return get(`${baseUrl}/getMyList`)
}

export default MyListGet
