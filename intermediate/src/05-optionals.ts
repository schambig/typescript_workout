/*
  The nullish coalescing operator '??' is a shorthand for checking whether a value is either null or undefined.
  If the value on the left side of the operator is either null or undefined, the operator returns the value on the right side,
  otherwise it returns the value on the left side:

    let name: string | null | undefined;

    name = "John";
    let displayName = name ?? "Guest";
    console.log(displayName); // Output: John

    displayName = name ?? "Guest";
    name = null;
    console.log(displayName); // Output: Guest

  The nullish coalescing operator is a useful tool for providing a default value for variables that might be null or undefined.
  It can be a more concise alternative to using an if statement to check for these values.
*/

// create a function with typed parameters
export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number // optional parameters always go last
) => {
  return {
    id,
    stock: stock ?? 10, // '??' instead of '||' because '||' has weird behavior
    isNew: isNew ?? true
  }
}

// 0 === false
// '' === false
// false === false

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(1);
console.log(p2);

// this makes to fail the use of '||', if we change '??' for '||'
// in lines 28 and 29 we will see the error, and it is because we are passing 'false' and  '0'
// which are considered as false
const p3 = createProduct(1, false, 0);
console.log(p3);
