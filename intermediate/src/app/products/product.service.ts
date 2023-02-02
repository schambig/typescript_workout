import { Product } from './product.model';

const products: Product[] = [];

const addProduct = (data: Product) => {
  // data.id = 'new id'; use of readonly keyword prevent a variable to be overwritten
  // data.createdAt = new Date(1998, 1, 1); use of readonly keyword prevent a variable to be overwritten
  products.push(data);
}

export {
  products,
  addProduct
}
