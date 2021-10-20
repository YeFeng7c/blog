// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'github-markdown-css/github-markdown.css';
import VueResource from 'vue-resource'
import LuckDraw from 'vue-luck-draw'
import less from 'less'
//复制到粘贴板插件
import VueClipboard from 'vue-clipboard2'
//import vueBaberrage from 'vue-baberrage'
import { vueBaberrage } from 'vue-baberrage'
import App from './App'
import router from './router'


Vue.use(vueBaberrage)
//Vue.use(vueBaberrage)
Vue.use(VueClipboard)
Vue.use(less)
Vue.use(LuckDraw)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
