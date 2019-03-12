import Prop from './Prop'
import ChartLib, { PaChart, ChartFactory } from 'vue-chartlib'

/**
 * 图表
 */
export default class Chart {
  /**
   * 控件属性
   */
  props: Prop[]

  name: string

  constructor(name: string, props: any) {
    this.name = name
    this.props = props
  }

  static make (name: string, options: any): PaChart {
    return ChartFactory.make(name, options)
  }
}
