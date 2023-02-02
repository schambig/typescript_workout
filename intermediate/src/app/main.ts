import { addProduct } from './products/product.service';

addProduct({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  updatedAt: new Date(), // add this propertie due to the extends
  stock: 90,
  category: { // this new category wad added due to the change of product.model.ts
    id: 12,
    name: 'c1',
    createdAt: new Date(), // add these two properties
    updatedAt: new Date(), // due to the extends
  }
});
