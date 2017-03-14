const autoInfo = {
  state: {
    username: '',
    password: '',
    captchaObj: null,
    isLogined: false
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
    },
    login (state) {
      state.isLogined = true
    }

  }
}
export default autoInfo
