<template>
  <div class="control-inspector">
    <header>
      <h6>属性</h6>
    </header>
    <main>
      <pa-chartlib-inspector
        v-model="value.controlProps"
        @change="onChange"></pa-chartlib-inspector>
      <pa-chartlib-inspector
        v-model="value.chartProps"
        @change="onChange"></pa-chartlib-inspector>
    </main>
  </div>
</template>

<script>
import { Inspector as PaChartlibInspector } from 'vue-chartlib/support'
export default {
  name: 'PaInspector',
  props: ['value'],
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
  h6
    font-size 14px
</style>
