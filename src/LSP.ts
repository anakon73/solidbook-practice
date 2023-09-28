interface Shape {
  areaOf(): number
}

interface WidthfulShape {
  setWidth(width: number): void
}

interface HeightfulShape {
  setHeight(height: number): void
}

type SquareShape = Shape & WidthfulShape

class Square implements SquareShape {
  edge: number

  constructor(edge: number) {
    this.edge = edge
  }

  protected setSize(size: number): void {
    this.edge = size
  }

  setWidth(width: number): void {
    this.setSize(width)
  }

  areaOf(): number {
    return this.edge ** 2
  }
}

type Rect = Shape & WidthfulShape & HeightfulShape
type ShapeSide = 'width' | 'height'

class Rectangle implements Rect {
  height: number
  width: number

  constructor(width: number, height: number) {
    this.height = height
    this.width = width
  }

  protected setSide(side: ShapeSide, size: number): void {
    this[side] = size
  }

  setWidth(width: number): void {
    this.setSide('width', width)
  }

  setHeight(height: number): void {
    this.setSide('height', height)
  }

  areaOf(): number {
    return this.height * this.width
  }
}
