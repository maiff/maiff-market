const autoInfo = {
  state: {
    username: '',
    password: '',
    captchaObj: null
  },
  mutations: {
    updateUsername (state, value) {
      state.username = value
    },
    updatePassword (state, value) {
      state.password = value
    },
    setCaptchaObj (state, obj) {
      state.captchaObj = obj
    }

  }
}
export default autoInfo
