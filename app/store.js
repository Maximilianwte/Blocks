import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userSettings: {
      startHour: 12,
      startMinute: "30",
      nBlocks: 4
    },
    activeBlocks: [
        {
          id: "001",
          name: "Pasta",
          cal: "387",
          carbs: "63",
          proteins: "8",
          fats: "4"
        }
    ]
  },
  mutations: {
    set_startHour(state, hour) {
      state.userSettings.startHour = hour
    },
    set_startMinute(state, minute) {
      minute = parseInt(minute);
      if (minute < 10) {
        // Bug notice: Weirdly enough, concatting both values breaks.
        minute = "0" + minute.toString();
      }
      else {
        minute = minute.toString();
      }
      state.userSettings.startMinute = minute
    },
    set_Blocks(state, nBlocks) {
      state.userSettings.nBlocks = nBlocks
    },
  },
  actions: {

  }
});
