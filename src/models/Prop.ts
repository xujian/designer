import PropDefs from './PropDefs'

/**
 * 不同类型的属性
 */
export enum PropTypes {
  NUMBER_ARRAY,
  NONE
}

export interface PropDimension {
  type: PropTypes.NUMBER_ARRAY,
  width: number,
  height: number
}

export interface PropPosition {
  type: PropTypes.NUMBER_ARRAY,
  x: number,
  y: number,
  z: 100
}

/**
 * 控件属性
 */
export interface PropValue<T> {
  value: PropDimension | PropPosition
}

/**
 * Base for Prop of Control other Classes
 */
export default class Prop<T = string | number> {
  /**
   * 用来区分属性名的标识符
   */
  name: string = 'no-name'
  /**
   * 用来显示的名称
   */
  label: string = 'No Name'
  /**
   * 只读
   */
  readonly: boolean = false
  value: any
  /**
   * 值数据类型
   */
  type: PropTypes = PropTypes.NONE

  constructor () {
  }

  static create(
    name: string,
    value: any,
    type?: PropTypes
  ): Prop {
    let prop = new Prop()
    prop.name = name
    prop.value = value
    prop.type = type || PropTypes.NONE
    return prop
  }
}