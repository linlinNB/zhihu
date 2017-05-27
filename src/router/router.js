import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../page/index'


Vue.use(VueRouter)

const routes = [
	{
		path:"/",
        component: index
	}
]

let router = new VueRouter({
	mode:"history",
	routes
})
/* eslint-disable no-new */

export default router;