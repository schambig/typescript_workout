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
