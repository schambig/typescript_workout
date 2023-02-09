export class MyDate {

  constructor(
    public year: number = 2022,
    public month: number = 5,
    private _day: number = 22, // use '_' with private or public properties using getters and setters
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
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
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  /*
    A getter is a special type of method that acts as a read-only property.
    A getter is defined using the "get" keyword and its value is calculated
    when the property is accessed
  */
  get day() {
    // code
    return this._day;
  }

  // a getter example to tell if a year is leap or not
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(2022, 5, 24);
console.log(myDate.printFormat());
// console.log(myDate.getDay());

// this makes reference to the getter method and not the property '_day'
// but this is just a read-only 'property'
console.log(myDate.day);
console.log('1993', myDate.isLeapYear);

// instantiate an object and check if it is a leap year or not, use a getter function
const myDate2 = new MyDate(2000, 7, 10);
console.log('2000', myDate2.isLeapYear);

// instantiate an object and check if it is a leap year or not, use a getter function
const myDate3 = new MyDate(2001, 7, 10);
console.log('2001', myDate3.isLeapYear);

// instantiate an object and check if it is a leap year or not, use a getter function
const myDate4 = new MyDate(2004, 7, 10);
console.log('2004', myDate4.isLeapYear);
