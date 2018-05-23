// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locales/en.json'
import zh from './locales/zh.json'

import App from './App'
import router from './router'
import func from './utils/func'
import constance from './utils/constance'
import 'swiper/dist/css/swiper.min.css'

// 多语言支持
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: func.GetLocal(constance.LANGUAGE_LOCAL) ? func.GetLocal(constance.LANGUAGE_LOCAL) : 'en',
  messages: {
    zh, en
  }
})
Vue.prototype.$func = func
Vue.prototype.$constance = constance
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : 'Joe\'s'
  next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
