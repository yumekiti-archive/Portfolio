import Vue from 'vue'
import Vuex from 'vuex'

import main from '@/store/modules/main.js'
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
    main,
    skill,
    work,
  }
})
