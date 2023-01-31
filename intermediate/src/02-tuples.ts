// this is a typed array, this arrays accepts infinite strings and numbers
const prices: (number | string)[] = [1,3,2,2,2, 'as'];
prices.push(1);
prices.push('1');

/*
  unlike arrays, tuples can be limited and strongly typed
  here we're limiting our tuple to three elements, its values and positions
*/
let user: [string, number, boolean];
// user = ['schambig', 15]; //wrong
// user = ['12', 15]; // wrong

// user = []; // wrong
// user = ['salo']; // wrong
// user = ['salo', 12]; // wrong
user = ['salo', 77, true]; // THIS IS RIGHT

// destructure a tuple to just use two values
const [username, age] = user;
console.log(username);
console.log(age);
