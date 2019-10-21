import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from "./views/Register";
import Login from "./views/Login";
import store from './store'

import {getTranslation} from "../src/i18n/translation";

let lang = "FR";
let translation = getTranslation(lang);



import appConfiguration from '../appConfig';
import {apiConfiguration} from './api/config/apiConfig';





const jwtManager = require('jsonwebtoken');

Vue.use(Router);

// middleware
let isAuthenticated = (to, from, next) => {
    if (store.getters.userToken || localStorage.getItem(btoa(appConfiguration.localStorageJwtKeyName))) {
        let jwtToken = atob(localStorage.getItem(btoa(appConfiguration.localStorageJwtKeyName))).toString().replace(appConfiguration.secret_localStorage_jwt,'');

        try  {
            let decoded = jwtManager
                .verify(jwtToken, apiConfiguration.jwtSecret);

            store.dispatch("login", {jwt: jwtToken}); // set in store if user is logged (localStorage OR userToken (not refresh since login) )

            next();
        } catch (e) {
            // TODO -> session expired modal
            console.log(e);
            console.log("EXCEPTION");
            console.log("TODO -> ", "modal with exception message");
            localStorage.removeItem(btoa(appConfiguration.localStorageJwtKeyName));
            next('/login')
        }
    } else {
        next('/login')
    }
};

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
            },
            beforeEnter: isAuthenticated
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
            beforeEnter: isAuthenticated,
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
