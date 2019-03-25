import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import mixins from './mixins'
import ChartLib from 'vue-chartlib'
import axios from 'axios'

const plugins = require.context('./plugins', true, /index.js$/)
plugins.keys().forEach(p => {
  Vue.use(plugins(p)) // TOTO: add options here
})

Vue.use(<any>ChartLib, {
  theme: 'cold'
})
Vue.use(<any>mixins)

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
