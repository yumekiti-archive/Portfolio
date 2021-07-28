import Vue from 'vue'
import Vuex from 'vuex'

import string from '@/store/modules/string.js'
import works from '@/store/modules/works.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    string,
    works,
  }
})
