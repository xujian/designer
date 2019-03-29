<template>
  <div class="prop-item-boolean">
    <q-checkbox
      :label="prop.label"
      :value="prop.value"
      @input="onInput"></q-checkbox>
    </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { Component, Prop as PropDecorator } from 'vue-property-decorator'

@Component({
  name: 'PaString'
})
export default class PaString extends PropInput {
  onInput (value: string) {
    this.emitChange({
      ...this.prop,
      value
    })
  }
}
</script>

<style>

</style>
