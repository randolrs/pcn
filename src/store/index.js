import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebar_open: true
  },
  mutations: {
    ...mutations
  }
})
