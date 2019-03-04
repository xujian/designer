import Prop, { PropTypes } from './Prop';
import Chart from './Chart'
import Stencil from './Stencil'
import Inspectable from '@/core/decorators/Inspectable'

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
  component: Chart | Stencil | undefined

  /**
   * 控件上显示的名称
   */
  @Inspectable({
    label: '名称'
  })
  name: string = 'Unamed'
  /**
   * 控件类型
   */
  type: ControlTypes = ControlTypes.EMPTY

  @Inspectable({
    label: '位置'
  })
  position: Prop = 
    Prop.create('position', [10, 10], PropTypes.NUMBER_ARRAY)

    @Inspectable({
    label: '尺寸'
  })
  dimension: Prop = 
    Prop.create('dimension', [480, 200], PropTypes.NUMBER_ARRAY)

  constructor () {
    this.component = undefined
  }

  /**
   * 从输入参数构建控件
   * @param input 输入参数
   */
  static create (input: any): Control {
    let control = new Control()
    control.name = input.name || ''
    control.type = ControlTypes.EMPTY
    control.position = Prop.create('dimention',
      input.position)
    control.dimension = Prop.create('position',
      input.dimension)
    return control
  }

  /**
   * 将local property组装为Prop instance
   * @param input 
   */
  private makeProp (input: string): Prop {
    let prop = Prop.create(input, null)
    return prop
  }

  /**
   * 控件的所有可配置属性
   * returan all inspectable properties
   */
  get props(): Prop[] {
    let props = (<any>this)['__inspectable__']
    console.log('get props()//////////', props)
    return props
  }
}
