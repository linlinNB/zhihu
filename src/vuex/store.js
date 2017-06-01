import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
 // 定义状态
 state: {
 menu_off:false
 },
 mutations:{
    changeMenu (state) {
        state.menu_off = !state.menu_off
    }
 },
  // actions: {
  //   // 封装一个 ajax 方法
  //   saveForm (context) {
  //     axios({
  //       method: 'get',
  //       url: 'http://news-at.zhihu.com/api',
  //     })
  //   }
  // }
})

export default store;