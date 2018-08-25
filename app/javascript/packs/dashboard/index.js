import Vue from 'vue'
import App from './components/app.vue'
import Vuetify from 'vuetify';

import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify);

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('#dashboard');
  const app = new Vue({ 
    el,
    render: h => h(App),
  });
})
