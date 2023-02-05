// due to ReadonlyArray<> we can't use any mutation method
const numbers: ReadonlyArray<number> = [1,2,2,2];
numbers.push(9);
numbers.pop();
numbers.unshift(1);
// the methods below don't mutate the original array, they create a new one
// that's why we can use them
numbers.filter(()=> {})
numbers.reduce(() => 0)
numbers.map(() => 0)
