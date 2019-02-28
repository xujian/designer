import ChartProp from './ChartProp'

export default class Control {
  /**
   * 控件属性
   */
  props: ChartProp[]

  constructor(props: ChartProp[]) {
    this.props = props
  }
}