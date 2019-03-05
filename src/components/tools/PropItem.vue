<template>
  <div  v-if="typeIs('String')" class="prop-item">
    <q-input
      dark
      :float-label="value.label"
      :value="value.value"
      @input="emitChange"></q-input>
  </div>
  <div v-else class="prop-item">
    <h6 class="info text-center">类型错误</h6>
    <p class="text-center">{{value.type}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop as PropDecorator } from 'vue-property-decorator'
import Prop, { PropTypes } from '@/core/models/Prop'

@Component
export default class PropItem extends Vue {
  @PropDecorator({ default: null })
  value!: Prop

  mounted () {
    console.log('PropItem.vue value',
      this.value)
  }

  typeIs (name: string): boolean {
    console.log('typeIs()', this.value.type)
    return this.value.type === name
  }

  emitChange (val: any) {
    console.log('q-input change()', val)
    let newProp = this.value
    newProp.value = val
    this.$emit('input', newProp)
  }
}
</script>

<style lang="stylus">
.prop-item
  h6
    font-size 12px
    &.info
      color #999
</style>
