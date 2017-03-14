import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from '../components/Index.vue'
import Login from '../components/Login.vue'

const routes = [
  {path: '/', component: Index},
  { path: '/login', component: Login }
]
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

export default router
