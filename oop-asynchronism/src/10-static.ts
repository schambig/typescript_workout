console.log('Math.PI',Math.PI); // use static property from Math library
console.log('Math.max',Math.max(1,2,2,8,1,0,3,3,3,3)); // use static method from "

// create our static property and method in a class, use 'static' keyword
class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) { // use spread operator to recieve an array of unlimited numbers
    return numbers.reduce((max, item) => max >= item ? max: item, 0);
  }
}

// const math = new MyMath();
// math.PI;
console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.max', MyMath.max(12,2,1,1112,9));
const numbers = [12,2,1,1112,9, 3000];
console.log('MyMath.max', MyMath.max(...numbers));
console.log('MyMath.max', MyMath.max(-1, -9, -8));
