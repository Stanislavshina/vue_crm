import Vue from 'vue'
import VueRouter from 'vue-router'
// import Dashboard from '../views/PageDashboard.vue'
// import About from '../views/AboutView.vue'
// import Page404 from '../views/Page404.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: ()=> import('../views/PageDashboard.vue')
    },
    {
      path: '/Dashboard/add/payment/:category',
      name: 'Dashboards',
      component: ()=> import('../views/PageDashboard.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: ()=> import('../views/AboutView.vue')
    },
    {
      path: '/calc',
      name: 'Calculate',
      component: ()=> import('../components/Calc.vue')
    },
    {
      path: '*',
      name: 'NotFound',
      component: ()=> import('../views/PageUngound.vue')
    },
    
  ]
})