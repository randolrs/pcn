import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebar_open: false,
    sidebar_selected: false
  },
  mutations: {
    ...mutations
  }
})
