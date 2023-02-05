import{ faker } from '@faker-js/faker'
import { Product } from './product.model';
import { CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto'

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

const findProduct = (dto: FindProductDto): Product[] => {
  // code to make the lookup of the products from the database
  // dto.color = 'blue'; this overwrite can not be done because we are using\
  // dto.isNew = 'true'; FindProductDto which is Readonly<Partial<Product>> utility type
  return products;
}

const deleteProduct = (id: string) => {
  // code
}

export {
  products,
  addProduct,
  updateProduct,
  findProduct,
  deleteProduct,
}
