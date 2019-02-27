import Vue from 'vue'
import helper from './helper'

export default {
  install () {
    Vue.mixin(helper)
  }
}
