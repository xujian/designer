<template>
  <div class="control">
    <q-toolbar class="titlebar justify-end">
      <q-btn-group>
        <q-btn flat
          class="button">
          <q-icon name="close"></q-icon>
        </q-btn>
        <q-btn flat
          class="button">
          <q-icon name="arrow_right"></q-icon>
        </q-btn>
      </q-btn-group>
    </q-toolbar>
    <h1 class="title">{{title}}</h1>
    <component :is="component"></component>
    <slot></slot>
  </div>
</template>

<script>
import PaControlMenu from './ControlMenu'
export default {
  name: 'PaControl',
  props: {
    title: {
      type: String,
      default: ''
    },
    component: {
      type: Object,
      default: null
    }
  },
  components: {
    PaControlMenu
  }
}
</script>

<style lang="stylus">
.control
  position relative
  background-color #5a5a5a
  border: 1px solid #ccc
  width 100%
  height 100%
  overflow hidden
  .title
    font-size 12px
    padding: 0 6px
    line-height 24px
  &.selected
    background-color #555
    border: 1px solid #009688
  &:hover
    background-color #666
  .titlebar
    height 24px
    font-size 12px
    min-height 24px
    position absolute
    top 0
    width 100%
    background-color rgba(0,0,0,0.1)
    transform translateY(-24px)
    transition all 0.5s
    .button
      width 24px
  &:hover
    .titlebar
      transform translateY(0px)
</style>
