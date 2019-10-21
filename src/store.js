import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// flow

// component we use this.$store.dispatch('actionName');

// action commit to a mutation with commit string given

// mutation is triggered by the commit from the action from the component dispatch

const type = {
    LOGIN_ACTIONS: {
        SET_JWT: "loginSetJwt"
    }
};

import appConfiguration from '../appConfig';

export default new Vuex.Store({
    state: {
        userToken: ""
    },
    mutations: {
        loginSetJwt(state, jwt) {
            localStorage.setItem(btoa(appConfiguration.localStorageJwtKeyName), btoa(`${jwt.jwt + appConfiguration.secret_localStorage_jwt}`));
            state.userToken = jwt;
        }
    },
    actions: {
        login({commit, state, dispatch}, jwt) { // can replace commit by context and so use context.commit (context refer to the store object only)
            commit(type.LOGIN_ACTIONS.SET_JWT, jwt)
        },
    },
    getters: {
        userToken: state => {
            //state.userToken est un Observe
            return state.userToken.jwt;
        }
    }
})
