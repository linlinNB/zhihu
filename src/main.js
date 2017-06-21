// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import store from './vuex'
import router from './router/router.js'
import AnimatedVue from 'animated-vue'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)

Vue.use(AnimatedVue)
Vue.use(MintUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})