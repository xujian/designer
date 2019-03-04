import Prop from './Prop'

/**
 * 图表
 */
export default class Stencil {
  /**
   * 控件属性
   */
  props: Prop[]

  constructor(props: Prop[]) {
    this.props = props
  }
}
