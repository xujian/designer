<template>
  <div class="control-inspector">
    <pa-chartlib-inspector
      v-model="mergedProps"
      @change="onChange"></pa-chartlib-inspector>
  </div>
</template>

<script>
import { Inspector as PaChartlibInspector } from 'vue-chartlib/support'
export default {
  name: 'PaInspector',
  props: ['value'],
  computed: {
    mergedProps () {
      return [...this.value.chartProps, ...this.value.controlProps]
    }
  },
  methods: {
    onChange (props) {
      this.$bus.emit('canvas', {
        command: 'propsUpdated',
        data: {
          uuid: this.value.uuid,
          props: props
        }
      })
    }
  },
  watch: {
  },
  mounted () {
    console.log('tools/Inspector.vue____________________', this.value)
  },
  components: {
    PaChartlibInspector
  }
}
</script>

<style lang="stylus">
.control-inspector
  header
    padding 0 12px
    background-color rgba(0,150,138,0.17)
  h6
    font-size 12px
    font-weight 100
</style>
