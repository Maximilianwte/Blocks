/* import Vue from 'nativescript-vue';
import Vuex from '../vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userSettings: {
            startHour: 12,
            startMinute: "30",
            nBlocks: 7
        }
        
    },
    mutations: {
        increaseEngines(state) {
            if (state.engines < 100) {
                state.engines++;
                state.weapons--;
            }
        },
        decreaseEngines(state) {
            if (state.engines > 0) {
                state.engines--;
                state.weapons++;
            }
        },
        increaseWeapons(state) {
            if (state.weapons < 100) {
                state.weapons++;
                state.engines--;
            }
        },
        decreaseWeapons(state) {
            if (state.weapons > 0) {
                state.weapons--;
                state.engines++;
            }
        }
    }
});

module.exports = store; */