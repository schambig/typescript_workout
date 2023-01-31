/*
  never type represents values that never occur. It's used in functions that throw exceptions,
  or in situations where the control flow is guaranteed to never reach the end of the function.
  The type never is a subtype of, and is assignable to, every type.
*/
const withoutEnd = () => { // inferred value type: never
  while (true) { // this is an infinite loop
    console.log("it's not a bug, it's a feature");
  }
}

// this function throws and error and stops the app, so it never stops (the function)
const fail = (message: string) => { // inferred value type: never, because the error thrown
  throw new Error(message);
}

const example = (input: unknown) => { // Type Annotation: unknown
  if (typeof input === 'string') { // due to the use of unknown we need to use type-assertion conditional
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('not match'); // inferred value type: never
}

console.log(example('Hola'));
console.log(example([1,1,1,1]));
console.log(example(1212)); // the program stops here because the parameter must be string or array
console.log(example('Hola despues del fail'));
console.log(example('Hola despues del fail'));
console.log(example('Hola despues del fail'));
