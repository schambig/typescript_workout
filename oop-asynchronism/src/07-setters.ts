export class MyDate {

  constructor(
    public year: number = 2022,
    private _month: number = 5,
    private _day: number = 24
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
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
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    // code
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month() {
    return this._month;
  }

  /*
    A setter is a special type of method that acts as a write-only property.
    A setter is defined using the "set" keyword, and its value is updated
    when the property is assigned a new value.
  */
  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('month out of range');
    }
  }
}

const myDate = new MyDate(2022, 5, 22);
console.log(myDate.printFormat());
myDate.month = 4;
console.log('run', myDate.month);
myDate.month = 78;
console.log('esto no debe aparecer', myDate.month);