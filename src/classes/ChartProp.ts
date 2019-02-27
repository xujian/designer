export interface PropDimension {
  width: number,
  height: number
}

export interface PropPosition {
  x: number,
  y: number
}

/**
 * 图表属性
 */
export interface ChartPropData {
  name: string,
  label: string,
  type: any,
  value: PropDimension | PropPosition
}

export default class ChartProp {
  data: ChartPropData
  constructor (input: ChartPropData) {
    this.data = input
  }
  get name () {
    return this.data.name
  }
}
