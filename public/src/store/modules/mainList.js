const mainList = {
  state: {
    mainList: [],
    count: 1,
    myList: []
  },
  mutations: {
    pushMain (state, value) {
      state.mainList.push(value)
    },
    pushList (state, List) {
      state.mainList.push(...List)
    },
    modifyMyList (state, List) {
      state.myList = List
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
