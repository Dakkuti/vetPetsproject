import Vue from "vue";
import Router from "vue-router";
import Index from "../src/components/Index.vue";
import Perros from "../src/components/main/Perros.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: 'home',
            component: Index
        },
        {
            path: "/dog",
            name: 'dog',
            component: Perros
        },
    ],
});