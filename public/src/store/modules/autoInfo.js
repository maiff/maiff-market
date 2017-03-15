const autoInfo = {
  state: {
    stuNum: '',
    password: '',
    captchaObj: null,
    isLogined: false,
    name: '请登录'
  },
  mutations: {
    updateStuNum (state, value) {
      state.stuNum = value
    },
    updatePassword (state, value) {
      state.password = value
    },
    updateName (state, value) {
      state.name = value
    },
    setCaptchaObj (state, obj) {
      state.captchaObj = obj
    },
    login (state, value) {
      state.name = value
      state.isLogined = true
    }

  }
}
export default autoInfo
