const mask = {
  state: {
    maskIsShow: false,
    toast: false,
    toastMes: ''
  },
  mutations: {
    toggleMaskState (state) {
      state.maskIsShow = !state.maskIsShow
    },
    toggleToast (state, value) {
      state.toast = value
    },
    setToastMes (state, value) {
      state.toastMes = value
    }
  },
  actions: {
    toggleMask (context) {
      context.commit('toggleMaskState')
    }
  }
}
export default mask
