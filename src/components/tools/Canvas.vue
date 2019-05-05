<template>
  <div class="board"
    :style="{
      width: canvasSize[0] * zoom + 'px',
      height: canvasSize[1] * zoom + 'px'
    }"
    @click.self="onBoardClick($event)">
    <vue-draggable-resizable
      v-for="(control, i) in controls"
      :key="i"
      :x="control.position.x"
      :y="control.position.y"
      :z="control.position.z"
      :w="parseInt(control.dimension.width)"
      :h="parseInt(control.dimension.height)"
      :handles="['bm', 'br', 'mr']"
      :draggable="!control.fixed"
      :resizable="!control.fixed"
      drag-handle=".titlebar .drag"
      @dragstop="onDragStop"
      @resizestop="onResizeStop"
      @activated="onActivated(control)"
      :class-name="control.fixed ? 'fixed': 'draggable'"
      :grid=[10,10]
      :parent="true">
        <pa-control
          :title="control.title"
          :uuid="control.uuid"
          :class="{
            selected: selected === control.uuid
          }"
          :component="control.component"
          @inspect="onControlInspect">
          </pa-control>
      </vue-draggable-resizable>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import VueDraggableResizable from 'vue-draggable-resizable'
import '@/css/vue-draggable-resizable.css'
import PaControl from '@/components/tools/Control.vue'
import Control, { ControlTypes } from '@/core/models/Control'
import { Prop, Inspectable } from 'vue-chartlib/support'
import utils from '@/core/utils'
import Chart from '@/core/models/Chart'
import { mocks } from 'vue-chartlib'
import api from '../../api'
import components from '@/api/components';


@Component({
  components: {
    VueDraggableResizable,
    PaControl
  }
})
export default class Canvas extends Vue {
  /**
   * 当前选中control
   */
  selected: string = ''
  canvasSize: number[] = [1920, 540]
  zoom: number = 1
  plexes: any[] = []
  controls: Control[] = []

  get mocks () {
    return mocks
  }

  get selectedControl () {
    return this.controls.find(c => c.uuid === this.selected)
  }

  get selectedPlex () {
    return this.plexes.find(c => c.uuid === this.selected)
  }

  onDragStop (x: number, y: number) {
    api.canvas.savePlex(this.selected, {
      position: {...this.selectedPlex.position, x, y}
    })
  }

  onResizeStop (
    left: number, top: number,
    width: number, height: number) {
    if (this.selectedControl) {
      this.selectedControl.repaint()
      api.canvas.savePlex(this.selected, {
        position: {
          ...this.selectedPlex.position,
          x: left,
          y: top,
        },
        dimension: {width, height}
      })
    }
  }

  onActivated (control: Control) {
    // 组件选中时
    this.selected = control.uuid
  }

  loadControls () {
    api.canvas.loadPlexes().then(plexes => {
      this.plexes = plexes
      const plexids = this.plexes.map(p => p.uuid)
      api.components.loadByPlex(plexids.join(',')).then(components => {
        components.forEach((c: any) => {
          let plex = this.plexes.find((pl: any) => pl.uuid === c.plexid)
          plex.component = c
        })
        this.controls = this.plexes.map(c => Control.create(c))
      })
    })
  }

  onControlInspect (uuid: string) {
    this.selected = uuid
    console.log('Canvas.vue---------onControlInspect=====', this.selectedControl)
    if (this.selectedControl) {
      this.inspect(this.selectedControl)
    }
  }

  inspect (control: Control) {
    let selected = this.selectedControl
    if (!selected) return
    let component = selected.component
    let chartProps = Inspectable.get(component) || []
    console.log('Canvas.vue______________inspect___chartProps', chartProps)
    this.aside('inspector', {
      // 打开右侧栏
      uuid: this.selected,
      controlProps: selected.props,
      chartProps
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
    if (payload.command === 'propsUpdated') {
      console.log('Canvas.vue---------$on-----propsUpdated', payload)
      this.processProps(payload.data)
    }
  }

  processProps (data: any) {
    let controlToUpdate = this.controls
      .find(c => c.uuid === data.uuid)
    if (controlToUpdate) {
      controlToUpdate.applyProps(data.props)
    }
  }

  onBoardClick ($event: any) {
    // this.selected = ''
  }

  @Watch('selected')
  onSelectedChanged (newVal: string, oldVal: string) {
    if (!newVal) {
      this.aside(false)
    }
  }

  changeCanvasSize (size: {
    width: number,
    height: number
  }) {
  }
  mounted () {
    this.initEvents()
    this.loadControls()
  }
}
</script>

<style lang="stylus">
.board
  position relative
  background: #444
  .drag
    color #fff
  .anchorBL
    display none
  .chart-container
    width 100%
    height 100%
</style>
