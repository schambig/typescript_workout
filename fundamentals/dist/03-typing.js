"use strict";
let productName = 'Product 1'; // inferred type: string
let productPrice = 123; // inferred type: number
productName = 'Product 2'; // as long as it is a string it can be changed
productName.toLocaleLowerCase(); // different methods for each value type
productPrice.toFixed(); // different methods for each value type
const productStock = 1000; // cannot be reassigned to refference a different value
const productName2 = 'Product 2'; // same of above
