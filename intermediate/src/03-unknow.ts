// let's remember how any type works, it could take any value
let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

// we can see that we can assing 'anyVar' to a boolean type variable, and that's kinda weird
let isNew: boolean = anyVar;
/*
  now we can see that vscode doesn't help us when trying to use a method,
  vscode won't tell whether that methos exists or not, won't check for typos, etc
  it behaves kinda JS so code Static Analysis does not work
*/
anyVar.doSomething(); // .doSomething() is not a method but vscode doesn't alert us
anyVar.touppercase(); // .touppercase() is a method but it is misspelled here and vscode stay silent

/*
  use 'unknown' value, it works like any but with some nuances
  The unknown type is stricter than the any type, which means that TypeScript will perform more type checking when using unknown values.
  For example, you cannot perform operations on an unknown value without first checking its type
  To work with unknown values, you need to use type guards or type assertions to first determine the actual type of the value before using it.
  A type guard is a type-checking function that returns a boolean,
  and a type assertion is a way to tell the TypeScript compiler to treat a value as a specific type:

    let value: unknown;
    if (typeof value === "string") {
      // TypeScript knows that value is a string inside this block
      let strValue = value;
    }
*/
let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};


// unknowVar.doSomething(); // the code static analysis asks us to first check the value type

// here we are doing a type assetion to tell the TypeScript compiler to treat a value as a specific type
if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}
// here we are first doing a type assertion and then declare tha variable and assing unknown value type
if (typeof unknowVar === 'boolean') {
  let isNewV2: boolean = unknowVar;
}

// we can also use 'unknown' value type for a function return, it is better tu use unknown instead of any value type
const parse = (str: string): unknown => {
  return JSON.parse(str);
}
