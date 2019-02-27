import Quasar from 'quasar'
import 'quasar-extras/animate'
import 'quasar-extras/material-icons'
import 'quasar-extras/fontawesome'
import './styles/quasar.styl'
import config from './config'

const install = (Vue, options) => {
  Vue.use(Quasar, {
    config: config
  })
}

export { install }
