export class MyDate {
  // year: number; we will create this property from the constructure, must use access keyword
  // month: number; "
  // day: number; "

  // we use the constructor to initialize the properties, MUST use access keywords
  // to let the constructor initilize the properties and omit the use of 'this'
  // also assign a defualt value for each property
  constructor(
    public year: number = 2022,
    public month: number = 5,
    private day: number = 22
  ) {}

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  getDay() {
    return this.day;
  }
}

// provide all the parameters
const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
console.log(myDate.getDay());

// do not provide any parameters
const myDate2 = new MyDate();
console.log('() =>',myDate2.printFormat());

// provide just one parameter
const myDate3 = new MyDate(2022);
console.log('(2022) =>', myDate3.printFormat());

// provide two parameters
const myDate4 = new MyDate(2022, 3);
console.log('(2022, 3) =>', myDate4.printFormat());
