//This is want we want to achieve:
// Salo => [S,a,l,o] => string => string[]
// [S,a,l,o] => Salo => string[] => string

/*
  function overloading refers to the ability to create multiple functions with the same name but with different parameters and implementation.
  The correct implementation is chosen based on the number and type of arguments passed to the function during a call.
  This is a feature of many statically-typed programming languages and can provide improved readability and maintainability of code.

  We need to use the 'function' keyword, not arrow functions
*/
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;


// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else {
//     return input.split(''); // string[]
//   }
// }

export function parseStr(input: unknown): unknown { // use unknown value type to let TS use the function overloading
  if (Array.isArray(input)) {
    return input.join(''); // return string
  } else if (typeof input === 'string'){
    return input.split(''); // return string[]
  } else if (typeof input === 'number'){
    return true; // return boolean
  }
}

// now we can see that it is not necessary to do a type assertion
const rtaArray = parseStr('Salo'); // return inferred: string[]
rtaArray.reverse();
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }
console.log('rtaArray', 'Salo =>' ,rtaArray);

const rtaStr = parseStr(['S','a','l','o']); // inferred return: string
rtaStr.toLowerCase();
// if (typeof rtaStr === 'string') {
//   rtaStr.toLowerCase();
// }
console.log('rtaStr', "['S','a','l','o'] =>",rtaStr);

const rtaBoolean = parseStr(12); // inferred return: boolean
console.log(rtaBoolean);
