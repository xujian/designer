<template>
  <q-scroll-area
    class="aside full-height">
    <component
      :is="contentComponent"
      v-model="contentData">
    </component>
  </q-scroll-area>
</template>

<script>
let PaInspector = () => import('@/components/tools/Inspector')
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
      console.log('Aside.vue--------contentData------', this.data)
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