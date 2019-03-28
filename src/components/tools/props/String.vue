<template>
  <q-input
    dark
    :float-label="prop.label"
    :value="prop.value"
    @input="emitChange"></q-input>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { Component, Prop as PropDecorator } from 'vue-property-decorator'

@Component({
  name: 'PaString'
})
export default class PaString extends PropInput {

}
</script>

<style>

</style>
