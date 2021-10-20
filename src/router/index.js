import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/mainPage',
      name: 'mainPage',
      component: ()=>import('@/components/page/mainPage')
    },
    {
      path: '/doglickingDiary',
      name: 'doglickingDiary',
      component: ()=>import('@/components/page/doglickingDiary')
    },
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/components/page/home')
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
      path: '/lunar',
      name: 'lunar',
      component: ()=>import('@/components/page/lunar')
    },
    {
      path: '/phoneNumber',
      name: 'phoneNumber',
      component: ()=>import('@/components/page/phoneNumber')
    },
    {
      path: '/divination',
      name: 'divination',
      component: ()=>import('@/components/page/divination')
    },
    {
      path: '/convert',
      name: 'convert',
      component: ()=>import('@/components/page/convert')
    },
    {
      path: '/dm',
      name: 'dm',
      component: ()=>import('@/components/page/dm')
    },
    {
      path: '/dm1',
      name: 'dm1',
      component: ()=>import('@/components/page/dm1')
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
