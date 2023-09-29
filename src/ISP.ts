interface CodeProducer {
  writeCode(): void
}

interface PizzaConsumer {
  eatPizza(slicesCount: number): void
}

interface SodaConsumer {
  drinkSoda(liters: number): void
}

abstract class Programmer implements CodeProducer {
  writeCode(): void { }
}

class RegularProgrammer
  extends Programmer
  implements PizzaConsumer, SodaConsumer {
  constructor() {
    super()
  }

  drinkSoda(liters: number): void { }

  eatPizza(slicesCount: number): void { }
}

class OnDietProgrammer extends Programmer {
  constructor() {
    super()
  }
}

type RecordTypes = 'spend' | 'income'
type SpendTypes = 'helpful' | 'harmful' | null

interface IRecord {
  amount: number
  date: Date
  is: RecordTypes
}

interface Spend extends IRecord {
  type: SpendTypes
}

class RecordItem implements IRecord {
  amount: number
  date: Date
  is: RecordTypes

  constructor(amount: number) {
    this.amount = amount
    this.date = new Date()
  }
}

class SpendItem extends RecordItem implements Spend {
  type: SpendTypes

  constructor(amount: number, type: SpendTypes = null) {
    super(amount)
    this.is = 'spend'
    this.type = type
  }
}

class IncomeItem extends RecordItem {
  constructor(amount: number) {
    super(amount)
    this.is = 'income'
  }
}