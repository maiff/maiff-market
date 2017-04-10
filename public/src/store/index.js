import Vue from 'vue'
import Vuex from 'vuex'
import mask from './modules/mask'
import autoInfo from './modules/autoInfo'
import register from './modules/register'
import goodInfo from './modules/goodInfo'
import mainList from './modules/mainList'
import comment from './modules/comment'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    mask: mask,
    autoInfo: autoInfo,
    register: register,
    goodInfo: goodInfo,
    mainList: mainList,
    comment: comment
  }
})

export default store
