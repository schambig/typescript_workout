// create two types, it can be done in one line
type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;

// interface need a body to be defined
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90
});

const addProduct = (data: Product) => {
  products.push(data);
}

/**
 * An interface in TypeScript is a blueprint for objects that defines the structure of the object,
 * including its properties and methods. It is a way of specifying a contract for classes or objects to implement.
 *
 * Interfaces can be used to enforce a particular structure for objects, classes, and functions in a TypeScript program. For example:
 *
 *    interface Person {
        firstName: string;
        lastName: string;
        sayHi(): string;
      }

      const person: Person = {
        firstName: 'John',
        lastName: 'Doe',
        sayHi: () => {
          return `Hi, my name is ${person.firstName} ${person.lastName}`;
        }
      };

      console.log(person.sayHi());  // Hi, my name is John Doe
  *
  * In this example, the Person interface defines the structure of an object with properties firstName, lastName, and method sayHi().
  * The person constant is of type Person, so it must include all the properties and methods defined in the interface.
 */
