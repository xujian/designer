import Prop from './Prop'

/**
 * 图表
 */
export default class Stencil {
  uuid: string = ''
  /**
   * 控件属性
   */
  props: Prop<any>[]

  constructor (props: Prop<any>[]) {
    this.uuid = props.uuid
    this.props = props
  }
}
