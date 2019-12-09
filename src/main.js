import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.use(axios)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 导航守卫
  console.log(to)
})

// 请求拦截器
axios.interceptors.request.use(config => {
  console.log(config)
  // return config
},
error => {
  return Promise.reject(error)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
