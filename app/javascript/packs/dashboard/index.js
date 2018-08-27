import Vue from 'vue'
import Vuetify from 'vuetify'


import Dashboard from './components/Dashboard'

Vue.use(Vuetify)

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('#dashboard')
  const app = new Vue({ el, render: h => h(Dashboard) })
})

export default Dashboard
