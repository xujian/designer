// https://github.com/qidaizhe11/vue-vuex-typescript-demo/blob/master/src/store/index.ts
import Vue from 'vue'
import Vuex from 'vuex'
import zoom from './modules/zoom'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    zoom,
  },
})
