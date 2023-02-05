// create a new interface to extend the properties of another one
// we will extend the interfaces located in all *.model.ts files (04)
export interface BaseModel {
  readonly id: string; // readonly prevent a variable to be overwritten\
  readonly createdAt: Date; // making it read only
  updatedAt: Date;
}

/*
  The readonly keyword in TypeScript is used to declare a property as read-only.
  This means that the property can only be read and cannot be modified after its initial assignment.
  ¡¡**The readonly keyword can be applied to properties of classes, interfaces, and objects.**!!

    class Person {
      readonly name: string;

      constructor(name: string) {
        this.name = name;
      }
    }

    const person = new Person('John Doe');
    person.name = 'Jane Doe'; // Error: Cannot assign to 'name' because it is a read-only property.

  By declaring properties as readonly, you can help ensure that the state of your objects remains consistent
  and that unintended changes are prevented. It also helps to make your code more self-documenting
  and can improve the maintainability and readability of your code.
*/
