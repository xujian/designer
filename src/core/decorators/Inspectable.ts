import Prop from '@/core/models/Prop'

export const INSPECTABLE_FIELD_NAME = '__inspectable__'
export const INSPECTABLE_METHOD_NAME = 'inspectedProps'
/**
 * 使属性项可以在右侧栏编辑
 */
export default function Inspectable (options: {
  label: string,
  readonly?: boolean
}) {
  console.log('Inspector.ts-------1')
  return (
    target: object,
    propertyKey: string
  ) => {
    console.log('Inspector.ts-------2')
    // 给 target 内部设置一个 inspectable 队列
    let prototype = target as any
    if (!target.hasOwnProperty(INSPECTABLE_FIELD_NAME)) {
      console.log('Inspector.ts-------no prototype field defined')
      Object.defineProperty(target, INSPECTABLE_FIELD_NAME, {
        value: []
      })
      Object.defineProperty(target, INSPECTABLE_METHOD_NAME, {
        value: function () {
          let control = this as any
          let props = control[INSPECTABLE_FIELD_NAME]
          console.log('Inspector.ts method ------00000', props, control)
          return props.map((p: any) => {
            let originalProp = control[p.name]
            let prop = originalProp.constructor.name === Prop.name
              ? originalProp
              : Prop.from({
                  ...p,
                value: control[p.name],
                })
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
