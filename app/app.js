import Vue from "nativescript-vue";
//import Vuex from './vuex';

import Home from "./components/Home";
import Block from "./components/Block";

//Vue.use(Vuex);
//import store from "./Store/store";

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,
    components: {
        Home,
        Block
    }
}).$start();
