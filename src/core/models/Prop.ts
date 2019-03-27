import PropDefs from './PropDefs'

/**
 * Base for Prop of Control other Classes
 */
export default class Prop<T = string> {
  name: string
  label: string | undefined
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
    this.__value = value as T
  }

  static create<T> (options: {
    name: string,
    value: T,
    label?: string,
    readonly?: boolean
  }): Prop<T> {
    let prop = new Prop<T>(options.name, options.value as T)
    prop.label = options.label
    prop.readonly = options.readonly || false
    return prop
  }
}
