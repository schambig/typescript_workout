import { Product } from './product.model';

export const products: Product[] = []; // initialize the array

export const createProduct = (data: Product) => {
  products.push(data);
}

export const calcStock = (): number => {
  let total = 0;
  products.forEach((item)=> {
    total += item.stock; // we need to pick stock parameter from Product{} object Literal Type because its value type
  });
  return total;
}

/*
This is another option to export (as an object),
with this, 'export' keywords above are no needed

export {
    products,
    addProduct,
    calcStock
}
*/
