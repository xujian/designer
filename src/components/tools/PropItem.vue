<template v-if="value.value.type === PropValueTypes.numberPair">
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
import { Component, Prop } from 'vue-property-decorator'
import ChartProp, { ChartPropData } from '@/models/ChartProp'
import ControlProp, { ControlPropData, PropValueTypes } from '@/models/ControlProp'

@Component
export default class PropItem extends Vue {

  @Prop({ default: null })
  value!: ChartPropData

  mounted () {
    console.log('PropItem.vue vaue',
      this.value.type.constructor)
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
