<template v-if="value.value.type === PropTypes.numberPair">
  <div class="prop-item">
    <q-input
      float-label="value.label"
      v-model="value.value"></q-input>
  </div>
</template>
<template v-else>
  <div class="prop-item">
    <h6 class="info text-center">类型错误</h6>
    <p class="text-center">{{value.name}}</p>
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
}
</script>

<style lang="stylus">
.prop-item
  h6
    font-size 12px
    &.info
      color #999
</style>
