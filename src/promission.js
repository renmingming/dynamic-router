import router from './router/index.js'
import axios from 'axios'
import store from './store'
const _import = require('./router/_import_components')
import Layout from '@/views/layout'

var getRouter
router.beforeEach((to, from, next) => {
  if (!getRouter) {
    axios.get('https://www.easy-mock.com/mock/5bab71e33567340cc7d3dc66/rmmapi/antrouter').then(res => {
			getRouter = res.data.data.router // 后台路由
			console.log(getRouter)
			routerGo(to, next) // 执行路由跳转方法
		})
  }else{
		next()
	}
})

function routerGo(to, next) {
	getRouter = filterAsyncRouter(getRouter) // 过滤路由
	router.addRoutes(getRouter) // 动态添加路由
	store.commit('setAntRouter', getRouter) // 将路由数据传递给vuex
	global.antRouter = getRouter // 将路由数据传递给全局变量，侧边栏菜单渲染
	next({...to, replace:true})
}

function filterAsyncRouter(asyncRouterMap) {
	const accessedRouters = asyncRouterMap.filter(route => {
		if(route.component) {
			if(route.component === 'Layout') {
				route.component = Layout
			} else {
				route.component = _import(route.component)
			}
		}
		if(route.children && route.children.length) {
			route.children = filterAsyncRouter(route.children)
		}
		return true
	})

	return accessedRouters
}
