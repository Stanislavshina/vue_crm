import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/PageDashboard.vue'
import About from '../views/AboutView.vue'
import Page404 from '../views/Page404.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/Dashboard/add/payment/:category',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '*',
      name: 'NotFound',
      component: Page404
    },
    
  ]
})