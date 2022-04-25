import Vue from 'vue'
import App from './App.vue'
import context from './plugins/contextMenu'
import modal from './plugins/ModalWidow'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false
Vue.use(modal)
Vue.use(context)

new Vue({
  router,
  render: function (h) { return h(App) },
  vuetify,
  store
}).$mount('#app')
