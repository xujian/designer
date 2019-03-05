<template>
  <div class="inspector">
    <header>
      <h1>组件设置</h1>
    </header>
    <main>
      <pa-props
        v-model="controlProps">
      </pa-props>
    </main>
  </div>
</template>

<script>
import PaProps from '@/components/tools/Props'

export default {
  name: 'PaInspector',
  props: {
    value: {
      type: [Array, Object]
    }
  },
  data () {
    return {
      uuid: this.value.uuid,
      controlProps: this.value.controlProps,
      chartProps: this.value.chartProps
    }
  },
  watch: {
    controlProps: {
      handler (newVal, oldVal) {
        this.$bus.emit('canvas', {
          command: 'propsUpdated',
          data: {
            uuid: this.value.uuid,
            props: newVal
          }
        })
      }
    }
  },
  mounted () {
    console.log('Inspector.vue moundted', this.value)
  },
  components: {
    PaProps
  }
}
</script>

<style lang="stylus">
.inspector
  header
    height 24px
    h1
      line-height 24px
      font-size 14px
      padding 0 12px
  main
    .q-list
      border none
</style>
