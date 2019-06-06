import { Prop } from 'vue-chartlib/dist/support'

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
