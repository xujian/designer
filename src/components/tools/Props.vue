<template>
  <div class="inspector-options">
    <q-list class="items" v-if="value.length > 0">
      <q-item
        v-for="(item, index) in value"
        :key="index">
        <q-item-main>
          <pa-prop-item v-model="value[index].data"></pa-prop-item>
        </q-item-main>
      </q-item>
    </q-list>
    <div v-if="value.length === 0"
      class="empty full-height">
      <h3 class="info text-center">无可用配置项</h3>
    </div>
  </div>
</template>

<script>
import PaPropItem from '@/components/tools/PropItem'

export default {
  name: 'PaProps',
  props: ['value'],
  methods: {
    onInputChange () {
    }
  },
  mounted () {
    console.log('PaOptions---', this.value)
  },
  components: {
    PaPropItem
  }
}
</script>

<style lang="stylus">
.inspector-options
  .empty
    color #999
    h3
      font-size 12px
      text-align center
</style>
