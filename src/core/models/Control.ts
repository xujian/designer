import Prop, { PropTypes } from './Prop';
import Chart from './Chart'
import Stencil from './Stencil'
import Inspectable, {
  INSPECTABLE_METHOD_NAME
} from '@/core/decorators/Inspectable'

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
  /**
   * Components (chart or non-chart thing) in the control
   */
  component: Chart | Stencil | undefined

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

  @Inspectable({
    label: '位置',
    readonly: true
  })
  public position: Prop = 
    Prop.create('position', [10, 10], PropTypes.NUMBER_ARRAY)

  @Inspectable({
    label: '尺寸',
    readonly: true
  })
  public dimension: Prop = 
    Prop.create('dimension', [480, 200], PropTypes.NUMBER_ARRAY)

  constructor () {
    console.log('Control.ts constructor')
    this.title = 'Untitled'
    this.component = undefined
  }

  /**
   * 从输入参数构建控件
   * @param input 输入参数
   */
  static create (input: {
    title: string,
    type: ControlTypes,
    props: any,
    position: number[],
    dimension: number[]
  }): Control {
    let control = new Control()
    control.title = input.title || 'Untitled'
    control.type = input.type ||ControlTypes.EMPTY
    control.position = Prop.create('dimention',
      input.position)
    control.dimension = Prop.create('position',
      input.dimension)
    return control
  }

  /**
   * 控件的所有可配置属性
   * returan all inspectable properties
   */
  get props(): Prop[] {
    let __this = this as any
    let props = __this[INSPECTABLE_METHOD_NAME]()
    console.log('Control.ts ======', props)
    return props
  }
}
