import Vue from "vue";
import Router from "vue-router";
// import Index from "../src/components/Index.vue";
// import Perros from "../src/components/main/Perros.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: 'home',
            component: () => import("./screen/Index.vue")
        },
        {
            path: "/dog",
            name: 'dog',
            component: () => import("../src/components/main/Perros.vue")
        },
        {
            path: "/Login",
            name: 'Login',
            component: () => import("./screen/Login.vue")
        },
        {
            path: "/Register",
            name: 'Register',
            component: () => import("./screen/Register.vue")
        },
    ],
});