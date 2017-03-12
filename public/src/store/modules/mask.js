const mask = {
  state: {
    maskIsShow: false
  },
  mutations: {
    toggleMaskState (state) {
      state.maskIsShow = !state.maskIsShow
    }
  },
  actions: {
    toggleMask (context) {
      context.commit('toggleMaskState')
    }
  }
}
export default mask
