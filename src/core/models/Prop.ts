import PropDefs from './PropDefs'

/**
 * Base for Prop of Control other Classes
 */
export default class Prop<T = string> {
  name: string
  /**
   * 只读
   */
  readonly: boolean = false

  private __value: T | null = null

  get value (): T | null {
    return this.__value
  }

  set value (v: T | null) {
    this.__value = v
  }

  constructor (name: string, value: T) {
    this.name = name
    this.__value = value
  }

  static create<T> (name: string, value: T): Prop<T> {
    let prop = new Prop<T>(name, value)
    return prop
  }
}
