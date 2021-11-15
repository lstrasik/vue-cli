import Vue from 'vue';
import './plugins/axios'
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify'
import store from './store'
// Vue.use(Vuetify);
// Vue.use(router);

new Vue({
    el: '#app',
    router,
    vuetify,
    store,
    render: h => h(App)
});
