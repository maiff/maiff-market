import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from '../components/Index.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import AddGood from '../components/AddGood.vue'
const routes = [
  {path: '/', component: Index},
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/addgood', component: AddGood }
]
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

export default router
