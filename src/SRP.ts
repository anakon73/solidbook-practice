type ReportData = {
  content: string,
  date: Date,
  size: number,
}

enum ReportTypes {
  Html,
  Txt,
  Cvs,
}

class ReportExporter {
  name: string
  data: ReportData

  constructor(name: string, data: ReportData) {
    this.name = name
    this.data = data
  }

  export(reportType: ReportTypes): string {
    const formatter: Formatter = FormatSelector.selectFor(reportType)
    return formatter.format(this.data)
  }
}

interface Formatter {
  format(data: ReportData): string
}

class HtmlFormatter implements Formatter {
  format(data: ReportData): string {
    return 'html string'
  }
}

class TxtFormatter implements Formatter {
  format(data: ReportData): string {
    return 'txt string'
  }
}

class CvsFormatter implements Formatter {
  format(data: ReportData): string {
    return 'cvs string'
  }
}

class FormatSelector {
  private static formatters = {
    [ReportTypes.Html]: HtmlFormatter,
    [ReportTypes.Txt]: TxtFormatter,
    [ReportTypes.Cvs]: CvsFormatter
  }

  static selectFor(reportType: ReportTypes) {
    const FormatterFactory = FormatSelector.formatters[reportType]
    return new FormatterFactory();
  }
}

const dynamicFormatter = FormatSelector.selectFor(ReportTypes.Html)
dynamicFormatter.format({ content: '', date: new Date(), size: 100 })

interface IPhoneNumber {
  phone: string
  officeCode: string
  valueOf(): string
}

class PhoneNumber implements IPhoneNumber {
  phone: string
  officeCode: string

  constructor(phone: string, officeCode: string) {
    this.phone = phone
    this.officeCode = officeCode
  }

  valueOf(): string {
    return `${this.phone} доб. ${this.officeCode}`
  }
}

class Person {
  name: string
  phoneNumber: IPhoneNumber

  constructor(name: string, phoneNumber: IPhoneNumber) {
    this.name = name
    this.phoneNumber = phoneNumber
  }

  phoneNumberOf(): string {
    return this.phoneNumber.valueOf()
  }
}
