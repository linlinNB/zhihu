import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios'
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
  actions: {
    // 封装一个 ajax 方法
    // saveForm (context) {
    //   axios({
    //     method: 'jsonp',
    //     url: 'https://api.douban.com/v2/book/1220562',
    //   })
    // }
  }
})

export default store;