const state = {
  links: [
    {link:'WelcomePage', name: 'HOME', isActive: false},
    {link:'Blog', name: 'BLOG', isActive: false},
    {link:'Native', name: 'PROJECTS', isActive: false},
    {link:'', name: 'DASHBOARD', isActive: false},
    {link:'Login', name: 'JOIN US', isActive: false}
  ],
  display: true
}

const getters = {
  getLinks: state =>{
    return state.links
  },
  getLinksCount: state=>{
    return state.LinksCount.length
  },
  getDisplay: state=>{
    return state.display
  }
}

const mutations = {
  setLinkActive: (state,payload) =>{
    state.links[payload.id].isActive = payload.active;
  },
  isLinkActive: (state,payload) =>{
    return state.links[payload].isActive;
  },
  setDisplay: (state,payload)=>{
    state.display = payload
  }
}

const actions = {
  setLinkActive: ({commit},payload) =>{
    setTimeout(()=>{
      commit('setLinkActive',paylaod);
    },20)
  },
  isLinkActive: ({commit},payload) =>{
    setTimeout(()=>{
      commit('isLinkActive',payload)
    },20);
  },
  setDisplay: ({commit},payload) =>{
    setTimeout(()=>{
      commit('setDisplay',payload)
    },20);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
