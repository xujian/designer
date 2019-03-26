import Prop from '@/core/models/Prop'

export const INSPECTABLE_FIELD_NAME = '__inspectable__'
export const INSPECTABLE_METHOD_NAME = 'getInspectableProps'
/**
 * 使属性项可以在右侧栏编辑
 */
export default function Inspectable (options: {
  label: string,
  readonly?: boolean
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
            let originalProp = control[p.name]
            let prop = originalProp.constructor.name === Prop.name
              ? originalProp
              : new Prop(propertyKey,control[p.name])
            return prop
          })
        }
      })
    }
    prototype[INSPECTABLE_FIELD_NAME].push({
      name: propertyKey,
      ...options
    })
  }
}
