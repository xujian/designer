<template>
  <q-scroll-area
    class="aside full-height">
    <component
      class="content"
      ref="right"
      :is="contentComponent"
      v-model="contentData">
    </component>
  </q-scroll-area>
</template>

<script>
import PaInspector from '@/components/tools/Inspector'

export default {
  name: 'PaAside',
  props: {
    component: {
      type: String,
      default: ''
    },
    data: {
      type: [Object, Array]
    }
  },
  computed: {
    contentComponent () {
      if (!this.component) {
        return null
      }
      if (this.views[this.component]) {
        return this.views[this.component].module
      }
      return null
    },
    contentData () {
      return this.data
    }
  },
  data () {
    return {
      params: {},
      view: '',
      views: {
        inspector: {
          title: '组件配置',
          module: PaInspector
        }
      }
    }
  },
  watch: {
    props (val) {
      console.log('Aside.vue watch props:', val)
    }
  },
  mounted () {
    console.log('Aside.vue', this.data)
  }
}
</script>

<style lang="stylus">

</style>
