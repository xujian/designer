<template>
  <div class="control" :uuid="uuid">
    <q-toolbar class="titlebar justify-end text-write">
      <q-btn-group no-shadow>
        <q-btn flat class="button delete" icon="close"></q-btn>
        <q-btn flat class="button drag" icon="drag_indicator"></q-btn>
        <q-btn flat class="button settings" @click="$emit('inspect', uuid)" icon="settings"></q-btn>
        <q-btn flat class="button menu-button" icon="arrow_right"></q-btn>
      </q-btn-group>
    </q-toolbar>
    <h1 class="title">{{title}}</h1>
    <div class="control-component">
      <div ref="component" style="width:100%;height:100%"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component as VueComponent } from 'vue'
import { Vue, Component, Prop } from 'vue-property-decorator'
import PaControlMenu from './ControlMenu.vue'

@Component({
  components: {
    PaControlMenu
  }
})
class PaControl extends Vue {
  name: string = 'PaControl'

  @Prop({ default: '' })
  uuid: string | undefined

  @Prop({ default: '' })
  title: string | undefined

  @Prop({ default: null })
  component: VueComponent | undefined

  @Prop({ default: 0 })
  width: number | undefined

  @Prop({ default: 0 })
  height: number | undefined

  @Prop({ default: null })
  props: any

  mounted () {
    /** 插入component(图表) */
    if (this.component) {
      (this.component as any).$mount(this.$refs.component)
    }
  }
}

export default PaControl
</script>

<style lang="stylus">
.control
  position relative
  background-color rgba(0,0,0,0.33)
  width 100%
  height 100%
  overflow hidden
  border: 1px solid rgba(0,0,0,0.33)
  .title
    font-size 12px
    padding: 0 6px
    line-height 24px
  &.selected
    border: 1px solid #009688
  &:hover
    border: 1px solid #009688
  .titlebar
    height 24px
    font-size 12px
    min-height 24px
    position absolute
    z-index 100
    top 0
    width 100%
    background-color rgba(0,0,0,0.1) !important
    transform translateY(-24px)
    transition all 0.5s
    .button
      width 24px
      color #fff
      min-height 24px
      .q-icon
        font-size 16px
  &:hover
    .titlebar
      transform translateY(0px)
  .control-component
    width 100%
    height 100%
    position absolute
    top 0
    left 0
.map-control
  border: none
  position absolute
.fullscreen-control
  width 100%
  height 100%
  left 0
  top 0
</style>
