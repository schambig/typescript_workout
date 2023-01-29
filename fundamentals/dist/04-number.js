"use strict";
(() => {
    let productPrice = 100; // inferred type: number
    productPrice = 12;
    console.log('productPrice:', productPrice);
    let customerAge = 28; // using Type Annotation
    // customerAge = customerAge + '1'; this concatenates: 281
    customerAge = customerAge + 1; // this adds
    console.log('customerAge:', customerAge);
    let productStock; // using Type Annotation
    console.log('productStock:', productStock);
    if (productStock > 10) {
        console.log('Is greater');
    }
    let discount = parseInt('123');
    console.log('discount:', discount);
    if (discount <= 200) {
        console.log('apply');
    }
    else {
        console.log('do not apply');
    }
    let hex = 0xfff;
    console.log('hex:', hex);
    let bin = 0b1010;
    console.log('bin:', bin);
})();
