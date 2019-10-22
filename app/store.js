import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userSettings: {
      startHour: 12,
      startMinute: "30",
      nBlocks: 4
    }
  },
  mutations: {

  },
  actions: {

  }
});
