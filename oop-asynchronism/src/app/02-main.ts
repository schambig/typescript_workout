import { ProductMemoryService } from './services/product-memory.service';

const productService = new ProductMemoryService();

productService.create({
  title: 'Producto 1',
  price: 100,
  description: 'this is an awesome product :)',
  categoryId: 12,
  images: []
});

const products = productService.getAll();
const productId = products[0].id;

productService.update(productId, {
  title: 'nuevo nombre'
});

const rta = productService.findOne(productId);
console.log(rta);
