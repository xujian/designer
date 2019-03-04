import Prop from '@/core/models/Prop'

export const FIELD_NAME = '__inspectable__'
/**
 * 使属性项可以在右侧栏编辑
 */
export default function Inspectable (options: {
  label: string,
  readonly?: boolean
}) {
  console.log('Inspectable----evaluated')
  return function (
    target: object, 
    propertyKey: string
  ) {
    // 给 target 内部设置一个 inspectable 队列
    console.log('Inspector++++ called', target, propertyKey);
    if (!target.hasOwnProperty(FIELD_NAME)) {
      Object.defineProperty(target, FIELD_NAME, {
        value: [],
        writable: false,
        enumerable: false
      })
    }
    (<any>target)[FIELD_NAME].push(Prop.from({
      name: propertyKey,
      label: options.label,
      value: (<any>target)[FIELD_NAME],
      readonly: options.readonly || false
    }))
  }
}