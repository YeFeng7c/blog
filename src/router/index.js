import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: ()=>import('@/components/page/mainPage')
    },
    {
      path: '/about',
      name: 'about',
      component: ()=>import('@/components/page/about')
    },
    {
      path: '/articleDetails',
      name: 'articleDetails',
      component: ()=>import('@/components/page/articleDetails')
    },
    {
      path: '/message',
      name: 'message',
      component: ()=>import('@/components/page/message')
    },
    {
      path: '/luckyPage',
      name: 'luckyPage',
      component: ()=>import('@/components/page/luckyPage')
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: ()=>import('@/components/page/myInfo')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('@/components/page/login')
    },
    {
      path: '/regist',
      name: 'regist',
      component: ()=>import('@/components/page/regist')
    },
    {
      path: '/articlesInfo',
      name: 'articlesInfo',
      component: ()=>import('@/components/page/articlesInfo')
    },
    {
      path: '/error500',
      name: "error500",
      component: ()=>import('@/components/page/error500')
    },
    {
      path: '/*',
      name: "error404",
      component: ()=>import('@/components/page/error404')
    }
  ]
})
