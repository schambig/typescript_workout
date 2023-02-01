/*
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

// create two types (1st: Literal Type, 2nd: Type), it can be done in one line
type Sizes = 'S' | 'M' | 'L' | 'XL'; // Sizes can only be these values
type userId = string | number; // userId con only take those values

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

console.log(products);
/**
 * Type vs Interface
 * In TypeScript, Type and Interface are used to describe the structure of objects.
 *
 * Type is a way to describe the structure of values, including primitive values and objects.
 * It can be used to describe a type that can be a union of other types, or to create an alias for a complex type.
 *
 * Interface is used to describe the structure of objects, including the shape of objects and the types of their properties.
 * An interface can describe objects with optional properties, read-only properties, or properties with specific types.
 * An interface can be extended by other interfaces to inherit their properties.
 *
 * In general, it's recommended to use Interfaces when describing objects and use Types when you want to describe
 * more general values, unions, or type aliases.
 */
