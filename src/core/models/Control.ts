import Prop from './Prop'
import PropTypes from './PropTypes'
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
    readonly: true,
    type: PropTypes.Position
  })
  public position: {} | undefined

  @Inspectable({
    label: '尺寸',
    readonly: true,
    type: PropTypes.Dimension
  })
  public dimension: {} | undefined

  constructor () {
    this.title = 'Untitled'
  }

  applyProps(props: any[]) {
    // console.log('Control.ts-----------applyProp---', props, this.props, this.component.props)
    props.forEach(prop => {
      this.props.forEach(x => {
        if (prop.name === x.name) {
          Reflect.set(this, x.name, prop.value)
        }
      })
      if (this.component) {
        console.log('...Control.ts-----------applyProp---', this.component.props)
        if (Object.keys(this.component.props).includes(prop.name)) {
          console.log('......Control.ts-----------applyProp---', prop.name)
          Reflect.set(this.component, prop.name, prop.value)
          this.repaint()
        }
      }
    })
  }

  repaint () {
    (this.component as any).repaint()
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
    Object.assign(control, input)
    if (input.component) {
      let component = ChartFactory.make(
        input.component.name,
        input.component.props,
        input.component.layers)
      Inspectable.set(component)
      control.component = component
    }
    return control
  }

  /**
   * 控件的所有可配置属性
   * returan all inspectable properties
   */
  get props(): Prop<any>[] {
    let __this = this as any
    let props = __this.getInspectableProps()
    return props
  }
}
