import Vue from 'vue'
import Vuex from 'vuex'
import mask from './modules/mask'
import autoInfo from './modules/autoInfo'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    mask: mask,
    autoInfo: autoInfo
  }
})

export default store
