const state = {
  sidebarToggle: false,
};

const mutations = {
  toggleSidebar(state, status) {
    state.sidebarToggle = status;
  },
};

const actions = {
  toggleSidebar({ commit }, payload) {
    commit("toggleSidebar", payload);
  },
};

const getters = {
  getSidebarToggle: (state, getters, rootState) => state.sidebarToggle,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
