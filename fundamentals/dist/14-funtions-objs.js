"use strict";
(() => {
    // use 'data' (could be any name) variable to pass an object as a parameter
    const login = (data) => {
        console.log(data.email, data.password);
    };
    // login('salo@salo.com', '12121212');
    // pass an object as parameter
    login({
        email: 'salo@salo.com',
        password: 12121212
    });
    const products = []; // use 'any' type just for this example
    const addProduct = (data) => {
        products.push(data);
    };
    // push new objects to products[]
    // we can see that 'size' is optional, so no error messages
    addProduct({
        title: 'Pro1',
        createdAt: new Date(1993, 1, 1),
        stock: 12
    });
    addProduct({
        title: 'Pro1',
        createdAt: new Date(1993, 1, 1),
        stock: 12,
        size: 'XL'
    });
    console.log(products);
})();
