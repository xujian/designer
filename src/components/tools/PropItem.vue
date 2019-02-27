<template v-if="value.type === Number">
  <div class="prop-item">
    <q-input 
      float-label="value.label"
      v-model="value.value"></q-input>
  </div>
</template>
<template v-if="value.type === `number-array`">
  <div class="prop-item">
    <q-input ></q-input>
  </div>
</template>
<template v-else>
  <div class="prop-item">
    <h6 class="info text-center">类型错误</h6>
    <p class="text-center">{{value.name}}</p>
  </div>
</template>

<script>
import ChartProp, { ChartPropData } from '@/classes/ChartProp'
import ControlProp from '@/classes/ControlProp'
/**
 * 显示在属性面板里的属性项
 * 依据属性type显示控件
 */
export default {
  name: 'PropItem',
  props: {
    value: {
      type: ChartPropData,
      default: null
    }
  },
  mounted () {
    console.log('PropItem.vue vaue', this.value.type.constructor)
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
