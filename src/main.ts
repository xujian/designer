import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import mixins from './mixins'
import axios from 'axios'
import 'reflect-metadata'
import Chartlib from 'vue-chartlib'
import './css/app.styl'

const plugins = require.context('./plugins', true, /index.js$/)
plugins.keys().forEach(p => {
  Vue.use(plugins(p))
})

Vue.use(Chartlib, {
  theme: 'dark'
})
Vue.use(mixins)

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
