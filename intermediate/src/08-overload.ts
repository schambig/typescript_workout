//This is want we want to achieve:
// Salo => [S,a,l,o] => string => string[]
// [S,a,l,o] => Salo => string[] => string

/*
  function overloading refers to the ability to create multiple functions with the same name but with different parameters and implementation.
  The correct implementation is chosen based on the number and type of arguments passed to the function during a call.
  This is a feature of many statically-typed programming languages and can provide improved readability and maintainability of code.

  We need to use the 'function' keyword, not arrow functions
*/
function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) { // use type assertion
    return input.join(''); // return string
  } else {
    return input.split(''); // return string[]
  }
}

const rtaArray = parseStr('Salo');
// rtaArray.reverse(); we know that this function will return an array but TS doesn't
// so we need to do a type assetion first and then we can use any array method
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Salo =>' ,rtaArray);

const rtaStr = parseStr(['S','a','l','o']);
// rtaStr.toLowerCase(); we know that this function will return a string but TS doesn't
// so we need to do a type assetion first and then we can use any string method
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['S','a','l','o'] =>",rtaStr);
