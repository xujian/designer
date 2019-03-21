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
      :x="control.position.value[0]"
      :y="control.position.value[1]"
      :w="control.dimension.value[0]"
      :h="control.dimension.value[1]"
      :handles="['bm', 'br', 'mr']"
      @dragging="onDrag(control)"
      @resizing="onResize(control)"
      @activated="onActivated(control)"
      :class-name="control.fixed ? 'fixed': 'drag'"
      :grid=[10,10]
      :parent="true">
        <pa-control
          :title="control.title"
          :width="control.dimension.value[0] - 2"
          :height="control.dimension.value[1] - 2 -25"
          :class="{
            selected: selected === control.uuid
          }"
          :component="control.component"
          >
          </pa-control>
      </vue-draggable-resizable>
      <!--div style="width:400px;height:200px;position:absolute;right:10px;top:10px">
        <pa-bar-chart
          :bar-width="20"
          :round="true"
          :styles="{background: '#240'}"
          :data="[
            [100, 150, 500, 250, 400],
            [47, 100, 100, 430, 210]
          ]">
            <pa-axis
              position="right"
              :label="'Y'"
              :data="['A', 'B', 'C', 'D', 'E']"></pa-axis>
            <pa-line-chart
            :smooth="true"
              :data="[
                [100, 150, 500, 250, 400],
                [47, 100, 100, 430, 210]
              ]"></pa-line-chart>
            <pa-tooltip
              :position="[10, 10]"
              :style="{}"></pa-tooltip>
        </pa-bar-chart>
      </div-->
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
  controls: Control[] = []

  get mocks () {
    return mocks
  }

  onDrag (control: Control) {
  }

  onResize (control: Control) {
  }

  onActivated (control: Control) {
    // 组件选中时
    this.selected = control.uuid
  }

  addControl () {
    this.controls.push(Control.create({
      title: 'Map 1',
      position: [0, 0, 100],
      dimension: [1920, 540],
      fixed: true,
      component: {
        name: 'PaBaiduMap',
        props: {
        },
        layers: [{
          name: 'PaScatterChart',
          type: 'baidu-map-scatter',
          data: [mocks['map-scatter']]
        }]
      }
    }))
    this.controls.push(Control.create({
      title: 'Cargo 1',
      position: [10, 10, 100],
      dimension: [320, 160],
      component: {
        name: 'PaBarChart',
        props: {
          barWidth: 8,
          round: true,
          data: mocks['bar-simple']
        }
      }
    }))
    this.controls.push(Control.create({
      title: 'Cargo 2',
      position: [10, 200, 100],
      dimension: [320, 160],
      component: {
        name: 'PaPieChart',
        props: {
          x: false,
          y: false,
          data: mocks['pie-simple']
        }
      }
    }))
    this.controls.push(Control.create({
      title: 'Cargo 2',
      position: [400, 10, 100],
      dimension: [320, 160],
      component: {
        name: 'PaLineChart',
        props: {
          lineWidth: 2,
          smooth: true,
          data: mocks['line-simple'],
          x: ['A', 'B', 'C', 'D', 'E', 'F']
        }
      }
    }))
    this.controls.push(Control.create({
      title: 'Cargo 4',
      position: [400, 200, 100],
      dimension: [320, 160],
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
    }))
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
    this.selected = ''
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
    this.addControl()
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
