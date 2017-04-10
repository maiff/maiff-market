import baseUrl from '../common/baseUrl'
import get from '../common/get'

function listGet (id) {
  return get(`${baseUrl}/getCommentFormById`, {
    goodId: id
  })
}

export default listGet
