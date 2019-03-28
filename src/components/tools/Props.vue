<template>
  <div class="inspector-props text-left">
    <q-list class="items" v-if="props.length > 0">
      <q-item
        v-for="(item, index) in props"
        :key="index">
        <q-item-main>
          <div class="prop-item" v-if="item.input">
            <h6>{{item.label}}</h6>
            <component
            :is="item.input"
            :value="item"></component>
          </div>
          <div v-else class="prop-item-na">
            <h6>{{item.label}}</h6>
            <p>尚未实现</p>
          </div>
        </q-item-main>
      </q-item>
    </q-list>
    <div v-if="value.length === 0"
      class="empty full-height">
      <h3 class="info text-center">无可用配置项</h3>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'PaProps',
  props: ['value'],
  data () {
    return {
      components: {},
    }
  },
  computed: {
    props () {
      let props: any[] = []
      this.value.forEach(p => {
        let type = p.value.constructor.name
        p.input = this.components[type]
        props.push(p)
      })
      return props
    }
  },
  methods: {
    onInputChange () {
    }
  },
  mounted () {
    console.log('Props.vue<><', this.props)
    const req = require.context('./props', true, /.vue$/)
    req.keys().forEach(filename => {
      let name: string = filename.match(/([\w\-]+)\.vue$/)[1]
      this.components[name] = req(filename).default
    })
  },
  components: {
  }
}
</script>

<style lang="stylus">
.inspector-props
  h6
    font-size 12px
    &.info
      color #999
  .empty
    color #999
    h3
      font-size 12px
      text-align center
</style>
