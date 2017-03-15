import Vue from 'vue'
import Vuex from 'vuex'
import mask from './modules/mask'
import autoInfo from './modules/autoInfo'
import register from './modules/register'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    mask: mask,
    autoInfo: autoInfo,
    register: register
  }
})

export default store
