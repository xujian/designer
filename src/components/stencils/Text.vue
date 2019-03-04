<template>
  <div class="text-stencil">
    <label>{{text}}</label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class TextStencil 
  extends Vue {

  @Prop({default: 'Hello'})
  text: string = 'Hello'

}
</script>

<style>

</style>
