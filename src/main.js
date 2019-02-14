import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'

import '@/utils/global' // 全局
import './promission.js' // 动态路由处理

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
