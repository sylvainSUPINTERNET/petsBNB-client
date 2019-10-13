import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from "./views/Register";
import Login from "./views/Login";

import {getTranslation} from "../src/i18n/translation";
let lang = "FR";
let translation = getTranslation(lang);

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            props: {
                translation: translation
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            props: {
                translation: translation
            }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            props: {
                translation: translation
            }
        },
        {
            path: '/about',
            name: 'about',
            props: {
                translation: translation
            },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
