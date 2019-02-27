import { Notify, Dialog, Platform } from 'quasar'

let helper = {
  data () {
    return {
      Platform
    }
  },
  components: {
    Notify,
    Dialog
  },
  methods: {
    aside (component, data) {
      if (component === false) {
        this.$bus.$emit('aside', false)
        return
      }
      this.$bus.$emit('aside', {
        component,
        data
      })
    }
  }
}

export default helper
