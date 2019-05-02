import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './registerServiceWorker'
import mixins from './mixins'
import axios from 'axios'
import 'reflect-metadata'
import {
  Quasar,
  QLayout,
  QHeader,
  QFooter,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QBtnGroup,
  QBtnDropdown,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QScrollArea
} from 'quasar'
import './css/app.styl'
import '@quasar/extras/material-icons/material-icons.css'
import ChartLib from 'vue-chartlib'

Vue.use(Quasar, {
  components: {
    QLayout,
    QFooter,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtnDropdown,
    QBtnGroup,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QScrollArea
  },
  directives: {
  },
  plugins: {
  }
})

const plugins = require.context('./plugins', true, /index.js$/)
plugins.keys().forEach(p => {
  Vue.use(plugins(p))
})

Vue.use(<any>ChartLib, {
  theme: 'dark'
})
Vue.use(<any>mixins)

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
