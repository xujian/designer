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

export default class ControlProp {
  data: ControlPropData
  constructor(input: ControlPropData) {
    this.data = input
  }
  get name() {
    return this.data.name
  }
  static create (input: any): ControlProp {
    let value: PropDimension = {
      width: 480,
      height: 200
    }
    let data: ControlPropData = {
      name: 'dimension',
      label: '尺寸',
      type: 'prop-dimension',
      value: value
    }
    return new ControlProp (data)
  }
}
