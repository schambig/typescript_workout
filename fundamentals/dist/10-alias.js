"use strict";
(() => {
    let userId;
    let shirtSize;
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';
    // shirtSize = 's'; // wrong, it MUST be one of the above
    function greeting(userId, shirtSize) {
        if (typeof userId === 'string') {
            console.log(`string ${userId.toLowerCase()}`);
        }
    }
    greeting(1111, 'S');
    greeting('CODE', 'XL');
})();
