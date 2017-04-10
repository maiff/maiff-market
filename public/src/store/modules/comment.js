const comment = {
  state: {
    commentList: [],
    commentContent: '',
    goodId: ''
  },
  mutations: {
    updateCommentList (state, value) {
      state.commentList = value
    },
    addComment (state, content) {
      state.commentContent = content
    },
    updateGoodId (state, goodId) {
      state.goodId = goodId
    },
    clearComment (state) {
      state.commentContent = ''
    }
  }
}
export default comment
