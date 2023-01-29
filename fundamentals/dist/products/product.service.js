"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcStock = exports.createProduct = exports.products = void 0;
exports.products = []; // initialize the array
const createProduct = (data) => {
    exports.products.push(data);
};
exports.createProduct = createProduct;
const calcStock = () => {
    let total = 0;
    exports.products.forEach((item) => {
        total += item.stock; // we need to pick stock parameter from Product{} object Literal Type because its value type
    });
    return total;
};
exports.calcStock = calcStock;
/*
This is another option to export (as an object),
with this, 'export' keywords above are no needed

export {
    products,
    addProduct,
    calcStock
}
*/
