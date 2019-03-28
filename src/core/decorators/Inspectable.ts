import Prop from '@/core/models/Prop'
import PropTypes from '../../core/models/PropTypes'
import 'reflect-metadata'

export const INSPECTABLE_FIELD_NAME = '__inspectable__'
export const INSPECTABLE_METHOD_NAME = 'getInspectableProps'
/**
 * 使属性项可以在右侧栏编辑
 */
export default function Inspectable (options: {
  label: string,
  readonly?: boolean,
  type?: any
}) {
  return (
    target: object,
    propertyKey: string
  ) => {
    // 给 target 内部设置一个 inspectable 队列
    let prototype = target as any
    if (!target.hasOwnProperty(INSPECTABLE_FIELD_NAME)) {
      Reflect.defineProperty(target, INSPECTABLE_FIELD_NAME, {
        value: []
      })
      Reflect.defineProperty(target, INSPECTABLE_METHOD_NAME, {
        value: function () {
          let control = this as any
          let props = control[INSPECTABLE_FIELD_NAME]
          return props.map((p: any) => {
            let value = control[p.name]
            let prop = new Prop({
              name: propertyKey,
              value: value,
              label: p.label,
              readonly: p.readonly,
              type: p.type
            })
            return prop
          })
        }
      })
    }
    let inspected = {
      name: propertyKey,
      ...options
    }
    Reflect.defineMetadata('proptype',
      PropTypes.Dimension, inspected)
    prototype[INSPECTABLE_FIELD_NAME].push(inspected)
  }
}
