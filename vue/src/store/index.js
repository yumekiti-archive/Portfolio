import Vue from 'vue'
import Vuex from 'vuex'

import string from '@/store/modules/string.js'
import skill from '@/store/modules/skill.js'
import work from '@/store/modules/work.js'

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
    skill,
    work,
  }
})
