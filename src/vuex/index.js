// 定义state，并将state与store的各个属性关联起来

import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
    menu_off:false, //menu按钮
    newList:true,//contentList判断是首页还是其他页面
    newListId:0,
    homeNewId:0,
    homePop:false,//菜单bug的变量
}

const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})

export default store
