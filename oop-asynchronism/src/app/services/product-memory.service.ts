import { faker } from '@faker-js/faker';

import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
// import { ProductService } from '../models/product-service.model'; commit this change in next push

// the line below will be implemented in next commit replacing line 12
// export class ProductMemoryService implements ProductService {

// create a class based on previous functions.
export class ProductMemoryService {
  private products: Product[] = [];

  getAll() {
    return this.products;
  }

  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
      }
    }
    return this.add(newProduct);
  }

  add(product: Product) {
    this.products.push(product);
    return product;
  }

  // add 'this' to 'products' to migrate function to class, it is not necessary tu use arrow functions
  // compare with original function: 'intermediate/src/app/products/product.service.ts'
  // the same with all the above code
  update(id: Product['id'], changes: UpdateProductDto ): Product {
    const index = this.products.findIndex(item => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes
    }
    return this.products[index];
  }

  findOne(id: Product['id']) {
    return this.products.find(item => item.id === id);
  }
}
