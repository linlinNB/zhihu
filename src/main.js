// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import App from './App.vue'
import store from './vuex'
import router from './router/router.js'
import { Lazyload } from 'mint-ui';


var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(Lazyload);
Vue.use(Mint);
Vue.config.productionTip = false
Vue.config.errorHandler = function (err, vm) {
    var componentName = Vue.util.formatComponentName(vm),
        propsData = vm.$options.propsData;
    fundebug.notifyError(err, {
        metaData: {
            componentName: componentName,
            propsData: propsData
    }});
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})