import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import mixins from './mixins'

const plugins = require.context('./plugins', true, /index.js$/)
plugins.keys().forEach(p => {
  Vue.use(plugins(p)) // TOTO: add options here
})

Vue.use(mixins)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
