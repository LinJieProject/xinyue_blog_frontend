import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import LoginAndRegistration from '@/views/LoginAndRegistration'

Vue.use(Router)

export default new Router({
  mode: 'history', // 使用 history API 模式（去除URL中的 #/ ）
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/LoginAndRegistration',
      name: 'LoginAndRegistration',
      component: LoginAndRegistration
    },
  ]
})
