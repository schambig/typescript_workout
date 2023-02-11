import { Dog } from './09-protected'; // import Dog class to use as a generic type

// if we use unknown we need to do an type assertion and that is not maintainable
// function getValue(value: unknown) {
//   return value;
// }

// if we use union type but we alsno need a type assertion first
// function getValue(value: string | number) {
//   return value;
// }


/*
  With generics, you can define a type placeholder that can be specified when you use the function, class, or interface.
  The type placeholder is then replaced with an actual type at compile time.
  This allows you to write code that can work with multiple data types,
  without having to write separate implementations for each type.

    function identity<T>(arg: T): T {
      return arg;
    }

    let output = identity<string>("Hello, world!");

    let output = identity("Hello, world!"); we can also omit the data type
*/
function getValue<myType>(value: myType) {
  return value;
}

getValue<number>(1212).toFixed(); // using generic types we can give the data type needed and use its own methods
getValue<string>('1212').toLowerCase(); // "
getValue<number[]>([1,1,1]).forEach; // "
const colitas = new Dog('colitas', 'salo'); // new instance of Dog
getValue<Dog>(colitas).greeting // we can access the Dog class properties because the generic type 'Dog'
