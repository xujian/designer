import './styles/quasar.styl'
import 'quasar-extras/animate'
import 'quasar-extras/material-icons'
import 'quasar-extras/fontawesome'
import Quasar from 'quasar'
import config from './config'

const install = (Vue, options) => {
  Vue.use(Quasar, {
    config: config
  })
}

export { install }
