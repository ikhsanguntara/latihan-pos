import Vue from "vue";
import Vuetify from "vuetify/lib";
import { colors } from "vuetify/lib";
import '@mdi/font/css/materialdesignicons.css'

import '@fortawesome/fontawesome-free/css/all.css'
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi' || 'fa',
    },
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: "#364ABF",
                secondary: "#3663BF",
                accent: "#BF9663",
                error: "#FF5252",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107",
                grey: colors.grey,
            },
        },
    },
});
