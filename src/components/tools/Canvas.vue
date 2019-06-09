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
      @dragging="onDragging"
      @dragstop="onDragStop"
      @resizestop="onResizeStop"
      @activated="onActivated(control)"
      :class-name="control.fixed ? 'fixed': 'draggable'"
      :grid="[10, 10]"
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
import Control from '@/core/models/Control'
import { Prop, Inspectable } from 'vue-chartlib/dist/support'
import api from '../../api'
import 'vue-chartlib/dist/chartlib.css'

/**
 * 处理屏幕定义/控件拖拽任务
 */
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
  components: any[] = []
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

  onDragging (x: number, y: number) {
    console.log('TCL: Canvas -> onDragging -> x: number, y: number', x, y)
    this.checkDrop(x, y)
  }

  onDragStop (x: number, y: number) {
    // api.canvas.addPlex(this.selectedPlex)
    api.canvas.savePlex(this.selected, {
      position: {...this.selectedPlex.position, x, y}
    })
    // api.components.add({
    //   uuid: utils.uuid(),
    //   plexid: this.selectedPlex.uuid,
    //   props: this.selectedPlex.component.props
    // })
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
        this.components = components
        this.components.forEach((c: any) => {
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
    if (component) {
      let props = component.inspectable()
      this.aside('inspector', {
        // 打开右侧栏
        uuid: this.selected,
        ...props
      })
    }
  }

  initEvents () {
    this.$bus.on('canvas', this.onCanvasCommands)
  }

  onCanvasCommands (payload: {
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
    let control = this.controls
      .find(c => c.uuid === data.uuid)
    if (control) {
      control.applyProps(data.props)
      let component = control.component
      if (component) {
        let props = component.props
        let assignedProps: {[key: string]: any} = {}
        Object.keys(props).forEach(p => {
          if (props[p] !== undefined
            && !['uuid', 'type', 'subType', '__data'].includes(p)) { // 直接给定的props
            assignedProps[p] = props[p]
          }
        })
        api.components.save(component.uuid, assignedProps)
      }
    }
  }

  checkDrop (x: number, y: number) {

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
    this.$chartlib.designtime = true
    this.$chartlib.bus.on('props', (payload: any) => {
      console.log('$chartlib.props=============================================on', payload)
      this.aside('inspector', {
        // 打开右侧栏
        uuid: this.uuid,
        ...payload.data
      })
    })
    this.initEvents()
    this.loadControls()
    console.log('Canvas.vue______________________________mounted__', this.$q)
  }
}
</script>

<style lang="stylus">
.board
  position relative
  background: #003335
  .drag
    color #fff
  .anchorBL
    display none
  .chart-container
    width 100%
    height 100%
</style>
