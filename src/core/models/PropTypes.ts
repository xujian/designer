namespace PropTypes {
  export class PropValueType {

  }

  export class Dimension extends PropValueType {
    width: number | string | undefined
    height: number | string | undefined
    constructor (input: {
      width: number | string,
      height: number | string
    }) {
      super()
      this.width = input.width
      this.height = input.height
    }
  }

  export class Position extends PropValueType {
    x: number | string
    y: number | string
    z?: number | string
    constructor (input: {x: number, y: number, z: number}) {
      super()
      this.x = input.x
      this.y = input.y
      this.z = input.z
    }
  }
}

export default PropTypes