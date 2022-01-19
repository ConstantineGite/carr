import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(Vuex)
Vue.use(VueMaterial)

const store = () => new Vuex.Store({
  state: {
    saleCurrencys : "USD",
    buyCurrencys : "EUR",
    sumSale: 100,
    localstorage: "",
    currencys : []
  },
  getters: {
    getLocalstorage (state) {
      return state.localstorage
    },
    getSaleCurrencys (state) {
      return state.saleCurrencys
    },
    getSumSale (state) {
      return state.sumSale
    },
    getBuyCurrencys (state) {
      return state.buyCurrencys
    },
    getCurrencys (state) {
      return state.currencys
    }
  },
  mutations: {
    SET_SALE_CURRENCY (state, curr) {
      state.saleCurrencys = curr
    },
    SET_LOCALSTORAGE (state, curr) {
      state.localstorage = curr
    },
    SET_SUM_SALE (state, curr) {
      state.sumSale = curr
    },
    SET_BUY_CURRENCY (state, curr) {
      state.buyCurrencys = curr
    },
    SET_CURRENCYS (state, curr) {
      state.currencys = curr
    }
  },
  actions: {
    setSeleCurrency ({ commit }, currency) {
      commit('SET_SALE_CURRENCY', currency)
    },
    setLocalstorage ({ commit }, currency) {
      const getData = JSON.parse(localStorage.getItem("carr"));
      const saveData = Object.assign({[Date.now()]: currency}, getData)
      localStorage.setItem("carr",  JSON.stringify(saveData));  
      commit('SET_LOCALSTORAGE', JSON.stringify(saveData))
    },
    setSumSale ({ commit }, currency) {
      commit('SET_SUM_SALE', currency)
    },
    setBuyCurrency ({ commit }, currency) {
      commit('SET_BUY_CURRENCY', currency)
    },
    setCurrencys ({ commit }, currency) {
      commit('SET_CURRENCYS', currency)
    }
  }
})

export default store
