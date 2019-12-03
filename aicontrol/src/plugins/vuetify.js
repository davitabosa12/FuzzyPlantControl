import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

import SocketIO from "vue-socket.io"

Vue.use(new SocketIO({
    debug: true,
    connection: 'http://localhost:8080',
    //options: { path: "/my-app/" } //Optional options
}));

export default new Vuetify({
});
