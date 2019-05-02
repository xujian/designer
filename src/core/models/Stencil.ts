import Prop from './Prop'

/**
 * 图表
 */
export default class Stencil {
  /**
   * 控件属性
   */
  props: Prop<any>[]

  constructor (props: Prop<any>[]) {
    this.props = props
  }
}
