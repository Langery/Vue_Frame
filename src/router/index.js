import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import One from '@/views/components/one.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/one',
    name: 'one',
    component: One
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
