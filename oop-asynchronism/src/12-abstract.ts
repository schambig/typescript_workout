// we need to add 'abstract' keyword to the class
// in 09-protected.ts: export abstract class Animal {...}

import { Animal, Dog } from './09-protected';

const animal = new Animal('elite'); // using 'abstract' keyword this instantiaton won't be possible
animal.greeting();

const cheis = new Dog('cheis', 'nico');
cheis.greeting();
cheis.woof(2);

/*
  In TypeScript, an abstract class is a special kind of class that cannot be instantiated directly,
  but can be used as a base class for other classes.
  An abstract class provides a common interface and partial implementation for its subclasses,
  allowing you to create objects that share a common structure and behavior.

  An abstract class is declared using the abstract keyword, and can contain abstract methods,
  which are methods that are declared but not implemented in the abstract class.
  Subclasses of the abstract class must provide an implementation for these abstract methods.

  Here's an example of an abstract class in TypeScript:

    abstract class Shape {
      abstract getArea(): number;
    }

    class Square extends Shape {
      sideLength: number;
      constructor(sideLength: number) {
        super();
        this.sideLength = sideLength;
      }
      getArea(): number {
        return this.sideLength * this.sideLength;
      }
    }

    let square = new Square(5);
    console.log(square.getArea()); // Output: 25

  In this example, the Shape class is an abstract class that defines an abstract method getArea.
  The Square class extends the Shape class and provides an implementation for the getArea method,
  which calculates the area of a square. Since the Shape class is abstract, you cannot create an instance of it directly.
  Instead, you must create an instance of a concrete subclass, such as the Square class,
  which provides a full implementation of the abstract class.
*/
