const register = {
  state: {
    password: '',
    stuNum: '',
    idCard: ''
  },
  mutations: {
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
