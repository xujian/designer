import Prop from './Prop'
import * as PropTypes from './PropTypes'
import Chart from './Chart'
import Stencil from './Stencil'
import Inspectable from '@/core/decorators/Inspectable'
import utils from '@/core/utils'
import { PaChart, ChartFactory } from 'vue-chartlib'

/**
 * 不同行为和内容的控件
 */
export enum ControlTypes {
  /**
   * 图表控件
   */
  CHART = 'Chart',
  /**
   * 通用控件
   */
  PLAIN = 'Plain',
  /**
   * 多页控件
   */
  TABS = 'Tabs',
  /**
   * 轮播控件
   */
  SWIPE = 'Swipe',
  /**
   * 没有内容的控件
   */
  EMPTY = 'Empty'
}

/**
 * 画布上可以拖动的控件
 */
export default class Control {
  uuid: string = ''
  /**
   * Components (chart or non-chart thing) in the control
   */
  component: Chart | Stencil | undefined

  /**
   * 数据组数(X轴刻度数)
   */
  groups: number = 0

  /**
   * 控件上显示的名称
   */
  @Inspectable({
    label: '标题'
  })
  public title: string = '(无标题)'
  /**
   * 控件类型
   */
  type: ControlTypes = ControlTypes.EMPTY

  fixed: boolean = false

  @Inspectable({
    label: '位置',
    readonly: true
  })
  public position: Prop<PropTypes.Position> | undefined

  @Inspectable({
    label: '尺寸',
    readonly: true
  })
  public dimension: Prop<PropTypes.Dimension> | undefined

  constructor () {
    this.title = 'Untitled'
  }

  applyProps (props: Prop[]): void {
    props.forEach(p => {
      if (p.name === 'title') {
        this.title = p.value
      }
    })
  }

  repaint () {
    this.component.repaint()
  }

  /**
   * 从输入参数构建控件
   * @param input 输入参数
   */
  static create (input: {
    uuid?: string,
    title: string,
    type?: ControlTypes,
    props?: any,
    position: {
      x: number,
      y: number,
      z: number
    },
    dimension: {
      width: number | string,
      height: number | string
    },
    component?: {
      name: string,
      props: any,
      layers?: any[]
    },
    fixed?: boolean
  }): Control {
    let control = new Control()
    control.uuid = input.uuid || utils.uuid()
    control.title = input.title || 'Untitled'
    control.type = input.type ||ControlTypes.EMPTY
    control.position = Prop.create<PropTypes.Position>(
      'position', input.position)
    control.dimension = Prop.create<PropTypes.Dimension>(
      'dimension', input.dimension)
    control.fixed = input.fixed || false
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxControls.ts-------make component', input.component)
    if (input.component) {
      let component = ChartFactory.make(
        input.component.name,
        input.component.props,
        input.component.layers)
      control.component = component
    }
    return control
  }

  /**
   * 控件的所有可配置属性
   * returan all inspectable properties
   */
  get props(): Prop[] {
    let __this = this as any
    let props = __this.getInspectableProps()
    return props
  }
}
