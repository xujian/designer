import Prop, { PropTypes } from './Prop';
import Chart from './Chart'

/**
 * 不同行为和内容的控件
 */
export enum ControlTypes {
  /**
   * 图表控件
   */
  CHART,
  /**
   * 通用控件
   */
  PLAIN,
  /**
   * 没有内容的控件
   */
  EMPTY
}

/**
 * 画布上可以拖动的控件
 */
export default class Control {
  chart!: Chart

  /**
   * 控件上显示的名称
   */
  name: string = ''
  /**
   * 控件类型
   */
  type: ControlTypes = ControlTypes.EMPTY
  position: Prop = 
    Prop.create('position', [10, 10], PropTypes.NUMBER_ARRAY)
  dimension: Prop = 
    Prop.create('dimension', [480, 200], PropTypes.NUMBER_ARRAY)

  constructor () {
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

  get props(): Prop[] {
    return [
      this.position,
      this.dimension
    ]
  }

}