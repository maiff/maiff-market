import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from '../components/Index.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import AddGood from '../components/AddGood.vue'
import Good from '../components/GoodDetail.vue'
import MyList from '../components/MyList.vue'
const routes = [
  {path: '/', component: Index},
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/addgood', component: AddGood },
  { path: '/good/:id', component: Good },
  { path: '/myList', component: MyList }
]
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

export default router
