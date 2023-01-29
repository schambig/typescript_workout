"use strict";
(() => {
    // use Type Annotation for parameter and return value, do not infer
    const calcTotal = (prices) => {
        let total = 0;
        prices.forEach((item) => {
            total += item;
        });
        return total.toString(); // use toString() method because 'total' is number value
    };
    // use Type Annotation (: void) for the return of the function
    const printTotal = (prices) => {
        const rta = calcTotal(prices);
        console.log(`El total es ${rta}`);
    };
    printTotal([1, 2, 1, 1, 1]);
})();
