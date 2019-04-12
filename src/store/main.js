import Vue from 'vue'
import Vuex from 'vuex'
import sing from './modules/signPanel.js'
import dashboard from './modules/dashboard.js'
import slider from './modules/slider.js'
import user from './modules/user.js'
import header from './modules/header.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},
  actions: {},
  getters:{},
  mutations:{},

  modules: {
    panelTruth: sing,
    dashboard,
    user,
    header
  }
})
