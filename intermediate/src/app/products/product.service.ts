import{ faker } from '@faker-js/faker'
import { Product } from './product.model';
import { CreateProductDto, UpdateProductDto } from './product.dto'

const products: Product[] = [];

const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}

const updateProduct = (id: string, changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
}

const getProduct = (id: string) => {
  // code
}

const deleteProduct = (id: string) => {
  // code
}

export {
  products,
  addProduct,
  updateProduct,
  getProduct,
  deleteProduct,
}
