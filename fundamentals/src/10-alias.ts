/*
  A literal type represents a set of specific values of a primitive data type such as string, number, or boolean.
  A literal type can be defined by enclosing the desired value(s) in single or double quotes (for strings),
  or by assigning a number or boolean value. For example:
  
    type myString = 'hello' | 'world';
    let greeting: myString = 'hello';
    
  In this example, myString is a literal type with two possible string values: 'hello' and 'world'.
  The type of the greeting variable is myString, meaning that it can only be assigned a value of 'hello' or 'world'.
  
  A literal type in TypeScript can only be of type string, number, or boolean.
  It represents a set of specific values of these primitive data types. Other primitive types such as null and undefined cannot be used as literal types.
*/
(()=>{
  type UserID = string | number; // create a ' literal type'
  let userId: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL'; // create a 'literal type'
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 's'; // wrong, it MUST be one of the above

  function greeting(userId: UserID, shirtSize: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
   }
   greeting(1111, 'S');
   greeting('CODE', 'XL');
})();

/*
  Type vs Literal Type (to make it clear)
  
  type is a way of creating new type alias in TypeScript.
  For example, you can use type to create an alias for a complex type or to represent a combination of different types.
  
    type Name = string;
    let myName: Name = 'John';

    type User = { name: string, age: number };
    let myUser: User = { name: 'Jane', age: 30 };
    
  On the other hand, a literal type is a specific subtype of a primitive type (such as string, number, or boolean) that represents a set of possible values.
  
    type Color = 'red' | 'blue' | 'green';
    let myColor: Color = 'red';
    
  So, type is a more general concept in TypeScript that can include literal types,
  but a literal type is a specific type of type that represents a set of specific values.
*/
