const state = {
  isActive: true,
  fullBlogObject: null,
  thatBlogInfo: null,
  isEditor: false,
  background: '',
  isCreator: false
}

const getters = {
  getActiveState: state => {
    return state.isActive
  },
  getBlogObject: state =>{
    return state.fullBlogObject;
  },
  getBlogInfo: state =>{
    return state.thatBlogInfo;
  },
  getEditorState: state =>{
    return state.isEditor
  },
  getBackground: state =>{
    return state.background;
  },
  getCreatorState: state=>{
    return state.isCreator
  }
}

const mutations = {
  setActive: (state,payload) =>{
    state.isActive = payload;
  },
  wipeBlogInfoData: (state)=>{
    state.thatBlogInfo = null;
  },
  wipeBlogData: (state)=>{
    state.fullBlogObject = null;
  },
  wipeAllData: (state) =>{
    state.fullBlogObject = {};
    state.thatBlogInfo = {};
  },
  setBlogInfoData: (state,payload)=>{
    state.thatBlogInfo = payload;
  },
  setFullBlogData: (state,payload)=>{
    state.fullBlogObject = payload;
  },
  setEditorState: (state,payload)=>{
    state.isEditor = payload;
  },
  setBackground: (state,payload)=>{
    state.background = payload;
  },
  setCreatorState:(state,payload)=>{
    state.isCreator = payload;
  }
}

const actions = {
  wipeBlogInfo: ({commit})=>{
    setTimeout(()=>{
      commit('wipeBlogInfoData');
    },50);
  },
  wipeBlogData: ({commit})=>{
    setTimeout(()=>{
      commit('wipeBlogData');
    },50);
  },
  wipeAllData: ({commit})=>{
    setTimeout(()=>{
      commit('wipeAllData');
    },50)
  },
  setBlogInfoData: ({commit},payload) =>{
    setTimeout(()=>{
      commit('setBlogInfoData',payload);
    },50)
  },
  setFullBlogData: ({commit},payload)=>{
          return new Promise((resvole,reject)=>{
            commit('setFullBlogData',payload);
            resvole(payload);
          });
  },
  setEditorState: ({commit},payload) =>{
    commit('setEditorState',payload);
  },
  setBackground: ({commit},payload) =>{
    console.log(payload);
    commit('setBackground',payload);
  },
  setCreatorState: ({commit},payload) =>{
    commit('setCreatorState',payload);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
