// import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
// import "material-design-icons-iconfont/dist/material-design-icons.css";
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
        iconfont: 'fa',
    },
})
