import Vue from 'vue'
import Vuex from 'vuex'
import mask from './modules/mask'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    mask: mask
  }
})

export default store
