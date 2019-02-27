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

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import '@/css/vue-draggable-resizable.css'
import PaControl from '@/components/tools/Control'
import ControlProp from '@/classes/ControlProp.ts'

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
    onDrag (cargo) {

    },
    onResize (cargo) {

    },
    onActivated (cargo) {
      // 组件选中时
      this.inspect(cargo)
    },
    onDeactivated (cargo) {
      this.aside(false)
    },
    inspect (cargo) {
      let props = [
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
          props: props.map(x => ControlProp.create(x))
        }
      )
    },
    initEvents () {
      this.$bus.on('canvas', this.processCanvasCommands)
    },
    processCanvasCommands (payload) {
      if (payload.command === 'changeSize') {
        this.changeSize(payload.data)
      }
    },
    changeCanvasSize (size) {
    }
  },
  mounted () {
    this.initEvents()
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
