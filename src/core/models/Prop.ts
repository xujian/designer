import PropDefs from './PropDefs'

/**
 * 不同类型的属性
 */
export enum PropTypes {
  STRING = 'String',
  NUMBER = 'Number',
  NUMBER_ARRAY = 'Number Array',
  NONE = 'None'
}

export declare type PropValueAsDimension = {
  width: number,
  height: number
}

export declare type PropValyeAsPosition = {
  x: number,
  y: number,
  z?: number
}

export interface PropValue<T = string> {
  value: T
}

/**
 * Base for Prop of Control other Classes
 */
export default class Prop<T = string> {
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
  value: T = new String('')
  /**
   * 值数据类型
   */
  type: PropTypes = PropTypes.STRING

  constructor () {
  }

  static create(
    name: string,
    value?: any,
    type?: PropTypes
  ): Prop {
    let prop = new Prop()
    prop.name = name
    prop.value = value || null
    prop.type = type || PropTypes.NONE
    return prop
  }

  static from<T> (input: {
    name: string,
    label: string,
    value?: any,
    readonly?: boolean
  }): Prop {
    let result: Prop = new Prop()
    result.name = input.name
    result.label = input.label
    result.type = PropTypes.STRING
    result.value = input.value
    result.readonly = input.readonly || false
    console.log('Props.ts //////////', result, input)
    return result
  }
}
