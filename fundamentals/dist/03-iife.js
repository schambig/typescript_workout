"use strict";
/*
  understanding Immediately Invoked Function Expression IIFE for short
  also known as Self-Executing Anonymous Function (Funcion anonima auto-ejecutada)
  This is useful to give the code inside a unique scope
  */
(() => {
    let productName = 'Product 1'; // inferred type: string
    let productPrice = 123; // inferred type: number
})();
// if those lines where outside the IIFE, the static analysis will throw an error
// because those variables are being used in another file (03-typing.ts)
