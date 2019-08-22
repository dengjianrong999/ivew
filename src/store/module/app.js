import { getMenuByRouter } from "@/libs/util";

import routers from "@/router/router";
export default {
  state: {
    // tagrouter: []
  },
  getters: {
    menuList: (state, getters, rootState) =>
      getMenuByRouter(routers, rootState.b.user.access)
  },
  mutations: {
    // addRouter(state, tagrouter) {
    //   state.isshowLeft = tagrouter.push(this.$route.meta.title);
    //   window.localStorage.setItem("tagrouter", tagrouter);
    // }
  }
};
