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


// get the value type automatically through the index using: Product['id']
const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
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
  // dto.tags = []; we cant overwrite because this propety es of type readonly
  // dto.tags?.pop(); we can't use mutation methods on this array due to\
  // dto.tags?.push(); ReadonlyArray<> utility type, see product.dto.ts
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
