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
    <div class="control-component" :style="{width: width + 'px', height: height + 'px'}">
      <div ref="component"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { VueComponent } from 'vue'
import { Vue, Component, Prop } from 'vue-property-decorator'
import PaControlMenu from './ControlMenu.vue'

@Component({
  components: {
    PaControlMenu
  }
})
export default class PaControl extends Vue {

  name: string = 'PaControl'

  @Prop({default: ''})
  title: string = ''

  @Prop({default: null})
  component: VueComponent | undefined

  @Prop({default: 0})
  width: number | undefined

  @Prop({default: 0})
  height: number | undefined

  @Prop({default: null})
  props: any

  constructor () {
    super()
  }

  mounted () {
    /**插入component(图表) */
    this.component.$mount(this.$refs.component)
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
  .control-component
    width 100%
    height 100%
</style>
