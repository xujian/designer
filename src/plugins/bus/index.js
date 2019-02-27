import Vue from 'vue'

const Bus = new Vue({
  methods: {
    emit (event, ...args) {
      this.$emit(event, ...args)
    },
    on (event, callback) {
      this.$on(event, callback)
    },
    off (event, callback) {
      this.$off(event, callback)
    },
    once (event, callback) {
      this.$once(event, callback)
    }
  }
})

const install = (Vue, options) => {
  Vue.prototype.$bus = Bus
}

export { install }
