import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import LoginAndRegistration from '@/views/LoginAndRegistration'
import ArticleDetail from '@/views/ArticleDetail'
import EditingArticles from '@/views/EditingArticles'

Vue.use(Router)

export default new Router({
  mode: 'history', // 使用 history API 模式（去除URL中的 #/ ）
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    {
      path: '/ArticleDetail/:id',
      name: 'ArticleDetail',
      component: ArticleDetail,
      meta:{
        title:'文章详细'
      }
    },
    {
      path: '/EditingArticles',
      name: 'EditingArticles',
      component: EditingArticles,
    },
  ]
})
