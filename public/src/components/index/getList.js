import baseUrl from '../common/baseUrl'
import get from '../common/get'

function listGet (count) {
  return get(`${baseUrl}/getGoodInfo`, {
    count: count
  })
}

export default listGet
