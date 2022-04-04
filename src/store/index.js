import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categorysList: [],
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getCategorysList: state => state.categorysList,
    getFullPrice: state => {
      return state.paymentsList.reduce((res, cur) => res + cur.price, 0)
    }
  },
  mutations: {
    setPaymentsListData(state, payload){
    state.paymentsList = payload
    },
    setCategorysListData(state, payload){
      state.categorysList = payload
    }
  },
  actions: {
    fetchData({commit}) {
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve([
              {
                date: '13.01.18',
                category: 'Education',
                price: 180
              },
              {
                date: '18.01.18',
                category: 'food',
                price: 250
              },
              {
                date: '25.02.18',
                category: 'sport',
                price: 190
              }
          ])
        },2000)
      })
      .then(res => {
        commit('setPaymentsListData',res)
      })
    },
    fetchCategorys({commit}) {
      return new Promise((resolve,reject)=>{
        resolve([
          'Расходы на детей',
          'Еда',
          'Одежда',
          'Развлечения',
          'Авто',
          'Дом',
          'Здоровье',
          'Спорт',
          'Образование',
          'Абонентская плата'
        ])
      })
      .then(res => {
        commit('setCategorysListData',res)
      })
    }
  },
  modules: {
  }
})
