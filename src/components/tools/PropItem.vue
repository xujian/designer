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
  <h6 class="info text-center">类型错误</h6>
</template>

<script>
import { CharPropData } from '@/classes/ChartProp.ts'
import ChartProp from '@/classes/ChartProp.ts'
import ControlProp from '@/classes/ControlProp.ts'
/**
 * 显示在属性面板里的属性项
 * 依据属性type显示控件
 */
export default {
  name: 'PropItem',
  props: {
    value: {
      type: `CharacterData`,
      default: null
    }
  }
}
</script>

<style>

</style>
