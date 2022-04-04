import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
  },
  getters: {
  },
  mutations: {
    setPaymentsListData(state, payload){
    state.paymentsList = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
