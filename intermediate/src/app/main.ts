import { addProduct } from './products/product.service';

addProduct({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90,
  category: { // this new category wad added due to the change of product.model.ts
    id: 12,
    name: 'c1'
  }
});
