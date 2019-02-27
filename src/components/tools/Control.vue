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
    <component :is="component"></component>
    <slot></slot>
  </div>
</template>

<script>
import PaControlMenu from './ControlMenu'
export default {
  name: 'PaControl',
  props: {
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
  background-color #009688
  width 100%
  height 100%
  overflow hidden
  &:hover
    background-color #00695c
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
