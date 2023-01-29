"use strict";
(() => {
    let userId; // using Union Type
    userId = 1212;
    userId = 'asasa';
    function greeting(myText) {
        if (typeof myText === 'string') {
            console.log(`string ${myText.toLowerCase()}`); // using Template Literals (``)
        }
        else {
            console.log(`number ${myText.toFixed(1)}`); // using Template Literals (``)
        }
    }
    greeting('SALOMON');
    greeting(12.1212121212);
})();
