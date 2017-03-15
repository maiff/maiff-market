const register = {
  state: {
    username: '',
    password: '',
    stuNum: '',
    idCard: ''
  },
  mutations: {
    setUsername (state, value) {
      state.username = value
    },
    setPassword (state, value) {
      state.password = value
    },
    setStuNum (state, value) {
      state.stuNum = value
    },
    setIdCard (state, value) {
      state.idCard = value
    }

  }
}
export default register
