const goodInfo = {
  state: {
    goodName: '',
    goodPrice: '',
    contactType: 'QQ',
    contactValue: '',
    goodDetail: '',
    imgUrl: []
  },
  mutations: {
    updategoodName (state, value) {
      state.goodName = value
    },
    updategoodPrice (state, value) {
      state.goodPrice = value
    },
    updatecontactType (state, value) {
      state.contactType = value
    },
    updatecontactValue (state, value) {
      state.contactValue = value
    },
    updategoodDetail (state, value) {
      state.goodDetail = value
    },
    pushimgUrl (state, value) {
      state.imgUrl.push(value)
    },
    modifyLast (state, value) {
      state.imgUrl.pop()
      state.imgUrl.push(value)
    },
    clear (state) {
      state.goodName = ''
      state.goodPrice = ''
      state.contactType = 'QQ'
      state.contactValue = ''
      state.goodDetail = ''
      state.imgUrl.length = 0
    }
  }
}
export default goodInfo
