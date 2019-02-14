import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout.vue'
import Page from '@/views/Page.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout
    },
    {
      path: '/page',
      name: 'page',
      component: Page
    }
  ]
})
