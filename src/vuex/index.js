// 定义state，并将state与store的各个属性关联起来
import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import menu from './modules/menu'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    menu
  },
})

export default store;
=======

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
    count: 0,
}

const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})

export default store
>>>>>>> origin/master