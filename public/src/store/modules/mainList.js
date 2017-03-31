const mainList = {
  state: {
    mainList: [],
    count: 1
  },
  mutations: {
    pushMain (state, value) {
      state.mainList.push(value)
    },
    pushList (state, List) {
      state.mainList.push(...List)
    },
    addCount (state) {
      state.count++
    },
    clearList (state) {
      state.mainList = []
    }
  }
}
export default mainList
