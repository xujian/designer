import { PropValidator } from 'vue/types/options';

export enum PropValueTypes {
  numberPair,
  none
}

export interface PropDimension {
  type: PropValueTypes.numberPair,
  width: number,
  height: number
}

export interface PropPosition {
  type: PropValueTypes.numberPair,
  x: number,
  y: number,
  z: 100
}

/**
 * 控件属性
 */
export interface ControlPropData {
  name: string,
  label: string,
  type: string,
  value: PropDimension | PropPosition
}

export default class ControlProp {
  name: string = 'no-name'
  label: string = 'No Name'
  value: any
  type: PropValueTypes = PropValueTypes.none
  constructor() {
    this.value = {}
  }
  static create (
    name: string,
    value: any,
    type?: PropValueTypes): ControlProp {
    let prop = new ControlProp()
    prop.name = name
    prop.value = value
    prop.type = type || PropValueTypes.none
    return prop
  }
}
