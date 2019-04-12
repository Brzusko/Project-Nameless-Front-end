const state = {
 panelEnabled: false
}

const getters = {
  getPanelState: state =>{
    return state.panelEnabled;
  }
}

const mutations = {
  setPanelState: (state,payload)=>{
    state.panelEnabled = payload;
  }
}

const actions = {
  setPanelState: ({commit},payload)=>{
    setTimeout(()=>{
      commit('setPanelState',payload);
    },20);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
