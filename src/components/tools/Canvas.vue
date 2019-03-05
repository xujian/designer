<template>
  <div class="board"
  :style="{
    width: canvasSize[0] * zoom + 'px',
    height: canvasSize[1] * zoom + 'px'
  }">
    <vue-draggable-resizable
      v-for="(control, i) in controls"
      :key="i"
      :x="control.position.value[0]"
      :y="control.position.value[1]"
      :w="control.dimension.value[0]"
      :h="control.dimension.value[1]"
      :handles="['bm', 'br', 'mr']"
      @dragging="onDrag(control)"
      @resizing="onResize(control)"
      @activated="onActivated(control)"
      @deactivated="onDeactivated(control)"
      class-name="drag"
      :grid=[10,10]
      :parent="true">
        <pa-control
          :component="control.chart"
          ></pa-control>
      </vue-draggable-resizable>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import VueDraggableResizable from 'vue-draggable-resizable'
import '@/css/vue-draggable-resizable.css'
import PaControl from '@/components/tools/Control.vue'
import Control, { ControlTypes } from '@/core/models/Control'
import Prop from '@/core/models/Prop'

@Component({
  components: {
    VueDraggableResizable,
    PaControl
  }
})
export default class Canvas extends Vue {
  canvasSize: number[] = [1920, 540]
  zoom: number = 1
  controls: Control[] = []

  onDrag (control: Control) {
  }

  onResize (control: Control) {
  }

  onActivated (control: Control) {
    // 组件选中时
    this.inspect(control)
  }

  onDeactivated (control: Control) {
    this.aside(false)
  }

  addEmptyControl () {
    this.controls.push(Control.create({
      title: 'Cargo',
      type: ControlTypes.EMPTY,
      props: {},
      position: [10, 10, 100],
      dimension: [320, 160]
    }))
  }

  inspect (control: Control) {
    this.aside('inspector', {
      // 打开右侧栏
      controlProps: control.props,
      chartProps: []
    })
  }

  initEvents () {
    this.$bus.on('canvas', this.processCanvasCommands)
  }

  processCanvasCommands (payload: {
    command: string,
    data: any
  }) {
    if (payload.command === 'changeSize') {
      this.changeCanvasSize(payload.data)
    }
  }

  changeCanvasSize (size: {
    width: number,
    height: number
  }) {
  }
  mounted () {
    this.initEvents()
    this.addEmptyControl()
    this.addEmptyControl()
  }
}
</script>

<style lang="stylus">
.board
  background-color #666
  .drag
    color #fff
</style>
