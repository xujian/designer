<template>
  <div class="board"
  :style="{
    width: canvasSize[0] * zoom + 'px',
    height: canvasSize[1] * zoom + 'px'
  }">
    <vue-draggable-resizable
      v-for="(car, i) in cargos"
      :key="i"
      :x="car.position[0]"
      :y="car.position[1]"
      :w="car.dimension[0]"
      :h="car.dimension[1]"
      :handles="['bm', 'br', 'mr']"
      @dragging="onDrag(car)"
      @resizing="onResize(car)"
      @activated="onActivated(car)"
      @deactivated="onDeactivated(car)"
      class-name="drag"
      :grid=[10,10]
      :parent="true">
        <pa-control
          :component="car.component"
          ></pa-control>
      </vue-draggable-resizable>
  </div>
</template>

<script lang="ts">
import VueDraggableResizable from 'vue-draggable-resizable'
import '@/css/vue-draggable-resizable.css'
import PaControl from '@/components/tools/Control.vue'
import ControlProp, { ControlPropData } from '@/classes/ControlProp'
import ChartProp, { ChartPropData } from '@/classes/ChartProp'

export default {
  name: 'PaCanvas',
  data () {
    return {
      canvasSize: [1920, 540],
      zoom: 1,
      cargos: [ // 画布上的控件
        {
          name: 'Cargo',
          type: 'chart',
          props: {},
          position: [10, 10, 100],
          dimension: [320, 160],
          component: null
        }
      ]
    }
  },
  methods: {
    onDrag (cargo: any) {

    },
    onResize (cargo: any) {

    },
    onActivated (cargo: any) {
      // 组件选中时
      this.inspect(cargo)
    },
    onDeactivated (cargo: any) {
      this.aside(false)
    },
    inspect (cargo: any) {
      let props: ControlPropData[] = [
        {
          name: 'position',
          label: '位置',
          type: Number,
          value: cargo.position
        },
        {
          name: 'dimension',
          label: '尺寸',
          type: Number,
          value: cargo.dimension
        },
        {
          name: 'componnet',
          label: '组件',
          type: Number,
          value: cargo.componnet
        }
      ]
      this.aside('inspector', {
        // 打开右侧栏 
        controlProps: props.map(x =>
          ControlProp.create(x)),
        chartProps: []
      })
    },
    initEvents () {
      this.$bus.on('canvas', this.processCanvasCommands)
    },
    processCanvasCommands (payload: {
      command: string,
      data: any
    }) {
      if (payload.command === 'changeSize') {
        this.changeCanvasSize(payload.data)
      }
    },
    changeCanvasSize (size) {
    }
  },
  mounted () {
    (this as any).initEvents()
  },
  components: {
    VueDraggableResizable,
    PaControl
  }
}
</script>

<style lang="stylus">
.board
  background-color #666
  .drag
    color #fff
</style>
