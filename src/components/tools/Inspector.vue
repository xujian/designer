<template>
  <div class="inspector">
    <header>
      <h1>组件设置</h1>
    </header>
    <main>
      <pa-props
        :value="controlProps">
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
    }
  },
  computed: {
    uuid () {
      return this.value.uuid
    },
    controlProps () {
      console.log('Inspector.vue-------------', this.value.controlProps)
      return this.value.controlProps
    },
    chartProps () {
      return this.value.chartProps
    }
  },
  watch: {
    // controlProps: {
    //   handler (newVal, oldVal) {
    //     console.log('Inspector.vue--------controlProps')
    //     this.$bus.emit('canvas', {
    //       command: 'propsUpdated',
    //       data: {
    //         uuid: this.value.uuid,
    //         props: newVal
    //       }
    //     })
    //   },
    //   deep: true
    // }
  },
  mounted () {
    console.log('Inspector.vue moundted', this.value,
    this.value.constructor.name)
  },
  components: {
    PaProps
  }
}
</script>

<style lang="stylus">
.inspector
  header
    height 32px
    background-color rgba(44, 44, 44, 0.5)
    h1
      line-height 32px
      font-size 14px
      padding 0 12px
  main
    .q-list
      border none
</style>
