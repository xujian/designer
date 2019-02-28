import ControlProp, { PropValueTypes, PropDimension } from './ControlProp';
import Chart from './Chart'
import { PropPosition } from './ChartProp';

export enum ControlTypes {
  chart,
  utils,
  empty
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
  type: ControlTypes = ControlTypes.empty
  position: ControlProp = ControlProp.create('position', [10, 10], PropValueTypes.numberPair)
  dimension: ControlProp = ControlProp.create('dimension', [480, 200], PropValueTypes.numberPair)

  constructor () {
  }

  /**
   * 从输入参数构建控件
   * @param input 输入参数
   */
  static create (input: any): Control {
    let control = new Control()
    control.name = input.name || ''
    control.type = ControlTypes.empty
    control.position = ControlProp.create('dimention',
      input.position)
    control.dimension = ControlProp.create('position',
      input.dimension)
    return control
  }

  get props(): ControlProp[] {
    return [
      this.position,
      this.dimension
    ]
  }

}