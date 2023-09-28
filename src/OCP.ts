interface AreaCalculatable {
  areaOf(): number
}

class Rectangle implements AreaCalculatable {
  height: number
  width: number

  constructor(height: number, width: number) {
    this.height = height
    this.width = width
  }

  areaOf(): number {
    return this.width * this.height
  }
}

class Circle implements AreaCalculatable {
  radius: number

  constructor(radius: number) {
    this.radius = radius
  }

  areaOf(): number {
    return Math.PI * (this.radius ** 2)
  }
}

class AreaCalculator {
  shapes: AreaCalculatable[]

  constructor(shapes: AreaCalculatable[]) {
    this.shapes = shapes
  }

  totalAreaOf(): number {
    return this.shapes.reduce((tally: number, shape: AreaCalculatable) => tally += shape.areaOf(), 0)
  }
}

interface Greeting {
  username: string
  greet(): string
}

class BaseGreeting implements Greeting {
  username: string

  constructor(username: string) {
    this.username = username
  }

  greet(): string {
    return `Hello, ${this.username}!`
  }
}

interface GreetingDecorator {
  decorated: Greeting
  greet(): string
}

class GreetingWithUppercase implements GreetingDecorator {
  decorated: Greeting

  constructor(decorated: Greeting) {
    this.decorated = decorated
  }

  greet(): string {
    const baseGreeting = this.decorated.greet()

    return baseGreeting.toUpperCase()
  }
}