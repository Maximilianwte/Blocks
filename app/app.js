import Vue from "nativescript-vue";

import Home from "./components/Home";
import Block from "./components/Block";

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
