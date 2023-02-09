const date = new Date(); // instanciate an object from a class
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(2022, 5, 24); // this is the format with Date: 0 = enero, 11 = dic
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);

let myVar;

// create a new class, use 'class' keyword
class MyDate {
  year: number;
  month: number;
  day: number;

  // use the constructor to initialize the properties above
  constructor(year: number, month: number, day: number) {
    // to use a property inside a class use the keyword 'this'
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

// use MyDate class, all parameters of the constructor are required
const myDate = new MyDate(2022, 5, 24);
console.log(myDate);
