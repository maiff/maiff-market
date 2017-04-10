import baseUrl from '../common/baseUrl'
import post from '../common/post'
import store from '../../store/'

function addPost () {
  return post(`${baseUrl}/addComment`, {
    goodId: store.state.comment.goodId,
    content: store.state.comment.commentContent
  })
}

export default addPost
