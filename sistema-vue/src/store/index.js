import Vue from 'vue'
import Vuex from 'vuex'
import Swal from 'sweetalert2';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    user: null,
    token: null,
    role: null,
  },
  getters: {
  },
  mutations: {
    setLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
    setUserType(state, payload) {
      state.role = payload;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
      localStorage.setItem('token', token);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
      localStorage.setItem('user', user);
    },
    setUserType({ commit }, role) {
      commit('setUserType', role);
      localStorage.setItem('role', role);
    }
    ,
    logout({ commit }) {
      Swal.fire({
        icon: "success",
        title: "Sesión cerrada",
        text: "hasta pronto...",
    });
      commit('setLoggedIn', false);
      commit('setToken', null);
      commit('setUser', null);
      commit('setUserType', null);
  
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('role');
    },
  },
  modules: {
  }
})
