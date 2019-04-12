const state = {
userLoggedIn: false,
userObject: {},
authToken: ''
}

const getters = {
getUserObject: state =>{
  return state.userObject;
},
isUserLoggedIn: state =>{
  return state.userLoggedIn;
},
getAuthToken: state =>{
  return state.authToken
}
}

const mutations = {
onLogin: (state,payload) =>{
  state.userLoggedIn = true;
  state.userObject = payload.userObject;
  state.authToken = payload.token;
},
onLogout: state =>{
  state.userLoggedIn = false;
  state.userObject = {};
  state.authToken = '';
}
}

const actions = {
onLogin: ({commit},payload)=>{
  setTimeout(()=>{
    console.log('Logged in');
    commit('onLogin',payload);
  },50)
},
onLogout: ({commit},payload)=>{
  setTimeout(()=>{
    console.log('Logged out');
    commit('onLogout',payload);
  },50);
}
}

export default {
  state,
  getters,
  mutations,
  actions
}
