import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)


Vue.config.productionTip = false

/*
/**
 * Middleware before each routes this is call
 */
/*
router
    .beforeEach((to, from, next) => {
        console.log("ok");
        console.log(store.getters.userToken)
        next();
        //if (!store.getters.userToken) next('/login');
        //else next();
    });
 */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
