import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../page/index'
import home from '../page/home'
import inside from '../page/inside'
Vue.use(VueRouter)

const routes = [
	{
		path:"/",
        component: index,
        children:[
        	{
        		path:"/",
        		component: home,
        	},
        	{
				path:"/inside",
		        component: inside,
			}
        ]
	},

]

let router = new VueRouter({
	mode:"history",
	routes
})
/* eslint-disable no-new */

export default router;