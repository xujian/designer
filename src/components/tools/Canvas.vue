<template>
  <div class="board"
    :style="{
      width: canvasSize[0] * zoom + 'px',
      height: canvasSize[1] * zoom + 'px'
    }"
    @click.self="onBoardClick($event)">
    <!-- <div class="control map-control">
      <pa-baidu-map>
        <pa-scatter-chart
        :data="[mocks['map-simple']]"></pa-scatter-chart>
      </pa-baidu-map>
    </div> -->
    <vue-draggable-resizable
      v-for="(control, i) in controls"
      :key="i"
      :x="control.position.value.x"
      :y="control.position.value.y"
      :w="parseInt(control.dimension.value.width)"
      :h="parseInt(control.dimension.value.height)"
      :handles="['bm', 'br', 'mr']"
      :draggable="!control.fixed"
      :resizable="!control.fixed"
      drag-handle=".titlebar .drag"
      @dragging="onDrag(control)"
      @resizestop="onResize"
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
      <div style="width:400px;height:200px;position:absolute;right:10px;top:10px">
        <pa-bar-chart
          :bar-width="20"
          :round="true"
          :styles="{background: '#240'}"
          :data="[
            [100, 150, 500, 250, 400],
            [47, 100, 100, 430, 210]
          ]">
            <pa-legend align="right" :data="['A', 'B', 'C', 'D']"></pa-legend>
            <pa-axis
              position="right"
              :label="'Y'"
              :data="['A', 'B', 'C', 'D', 'E']"></pa-axis>
            <pa-line-chart
              :axis="'right'"
              :smooth="true"
              :data="[
                [0.25, 0.87, 0.33, 0.5, 0.12],
                [0.78, 0.76, 0.34, 0.69, 0.78]
              ]">
              <pa-marks type="max-min"></pa-marks>
            </pa-line-chart>
            <pa-tooltip
              :position="[10, 10]"
              :style="{}"></pa-tooltip>
        </pa-bar-chart>
      </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import VueDraggableResizable from 'vue-draggable-resizable'
import '@/css/vue-draggable-resizable.css'
import PaControl from '@/components/tools/Control.vue'
import Control, { ControlTypes } from '@/core/models/Control'
import Prop from '@/core/models/Prop'
import utils from '@/core/utils'
import Chart from '@/core/models/Chart'
import { mocks } from 'vue-chartlib'


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
  controlsSource: any[] = []

  get mocks () {
    return mocks
  }

  get selectedControl () {
    return this.controls.find(c => c.uuid === this.selected)
  }

  onDrag (control: Control) {
  }

  onResize () {
    this.selectedControl 
      && this.selectedControl.repaint()
  }

  onActivated (control: Control) {
    // 组件选中时
    this.selected = control.uuid
  }

  loadControls () {
    this.$http.get('/api/plexes')
      .then((res: any) => {
        console.log('Canvas.loadControls~~/api/plexes~~~~~~~~~', res.data)
        this.plexes = res.data
        const plexids = this.plexes.map(p => p.uuid)
        this.$http.get(`/api/plexes/${plexids.join(',')}/components`)
          .then((res2: any) => {
            console.log('Canvas.loadControls~~~~~~~~~~~', res2.data)
            res2.data.forEach((c: any) => {
              let plex = this.plexes.find((pl: any) => pl.uuid === c.plexid)
              plex.component = c
            })
            this.controls = this.plexes.map(c => Control.create(c))
          }
        )
      })
    this.controlsSource = [
      {
        uuid: 'c359d46f-4e32-4802-816f-36f9df1dd2e0',
        title: 'Map 1',
        position: {
          x: 0,
          y: 0,
          z: 1
        },
        dimension: {
          width: 1920,
          height: 540
        },
        fixed: true,
        component: {
          name: 'PaBaiduMap',
          props: {
          },
          layers: [{
            props: {
              name: 'PaScatterChart',
              type: 'baidu-map-scatter',
              data: [mocks['map-scatter']]
            }
          }]
        }
      }, {
        uuid: utils.uuid(),
        title: 'Cargo 4',
        position: {
          x: 800,
          y: 10,
          z: 100
        },
        dimension: {
          width: 320,
          height: 160
        },
        component: {
          name: 'PaScatterChart',
          props: {
            symbol: 1,
            data: mocks['scatter-simple'],
            x: {
              type: 'value',
              label: '{value} cm'
            },
            styles: {
              background: '#940'
            }
          }
        }
      }
    ]
    // this.controls = this.controlsSource.map(c => Control.create(c))
  }

  onControlInspect (uuid: string) {
    this.selected = uuid
    let c = this.controlsSource.find(c => c.uuid === uuid)
    console.log('Canvas.vue---------onControlInspect=====', c)
    this.$http.post('/api/components', {
      plexid: uuid,
      name: c.component.name,
      props: c.component.props
    })
    this.$http.post('/api/plexes', {
      uuid: uuid,
      fixed: c.fixed,
      title: c.title,
      position: c.position,
      dimension: c.dimension
    })
    .then((res: any) => {
      console.log('this.$http.get^^^^^^^^^^^^^', res)
    })
  }

  inspect (control: Control) {
    this.aside('inspector', {
      // 打开右侧栏
      uuid: this.selected,
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
    if (payload.command === 'propsUpdated') {
      this.processProps(payload.data)
    }
  }

  processProps (data: any) {
    let controlToUpdate = this.controls
      .find(c => c.uuid === data.uuid)
    controlToUpdate && controlToUpdate.applyProps(data.props)
  }

  onBoardClick ($event: any) {
    // this.selected = ''
  }

  @Watch('selected')
  onSelectedChanged (newVal: string, oldVal: string) {
    if (!newVal) {
      this.aside(false)
    } else {
      let selectedControl = this.controls
        .find(c => c.uuid === newVal)
      selectedControl && this.inspect(selectedControl)
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
</style>
