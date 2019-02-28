<template>
  <div class="inspector">
    <header>
      <h1>组件设置</h1>
    </header>
    <main>
      <pa-props
        v-model="value.controlProps">
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
  watch: {
    props: function (val) {
      console.log('Inspector.vue watch props:', val)
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
