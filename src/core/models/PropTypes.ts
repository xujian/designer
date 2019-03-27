namespace PropTypes {
  export class PropValueType {

  }

  export class Dimension {
    width: number | string | undefined
    height: number | string | undefined
    constructor (input: { width: number, height: number }) {
      this.width = input.width
      this.height = input.height
    }
  }

  export class Position {
    x: number | undefined
    y: number | undefined
    z?: number | undefined
  }
}

export default PropTypes