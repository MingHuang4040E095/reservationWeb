import Vue from 'vue'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app')
