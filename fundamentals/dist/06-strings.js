"use strict";
(() => {
    let productTitle = 'My amazing product'; // inferred value: string
    // productTitle = null;
    // productTitle = () => {};
    // productTitle = 123;
    productTitle = 'My amazing product changed';
    console.log('productTitle', productTitle);
    const productDescription = "I'm bla bla ba bla bl s asasas"; // (" ' "), (' " '), (\')
    console.log('productDescription', productDescription);
    let productPrice = 100;
    let isNew = false; // using Type Annotation
    // using Template literals (Template strings)
    const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
    console.log(summary);
    const myString = ''; // String =/= string
})();
