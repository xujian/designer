export interface PropDimension {
  width: number,
  height: number
}

export interface PropPosition {
  x: number,
  y: number
}

/**
 * 控件属性
 */
export interface ControlPropData {
  name: string,
  label: string,
  type: any,
  value: PropDimension | PropPosition
}

export default class ChartProp {
  data: ControlPropData
  constructor(input: ControlPropData) {
    this.data = input
  }
  get name() {
    return this.data.name
  }
}
