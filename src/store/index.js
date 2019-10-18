import Vue from "vue";
import Vuex from "vuex";

import user from "./module/user";
import app from "./module/app";

Vue.use(Vuex);

const moduleA = {
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    app
  },
  getters: {}
};

const moduleB = {
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user
  },
  getters: {
    token: state => state.user.token,
    name: state => state.user.userName
    // avatar: state => state.user.avatar,
    // roles: state => state.user.roles
  }
};
const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
});
export default store;
