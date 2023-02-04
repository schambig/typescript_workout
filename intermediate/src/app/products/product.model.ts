import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";

type Sizes = 'S' | 'M' | 'L' | 'XL'; // Sizes can only be these values
// interface need a body to be defined
interface Product extends BaseModel {
  // id: string | number; add this property through an extend using BaseModel
  // createdAt: Date; add this property through an extend using BaseModel
  title: string;
  image: string; // added for CRUD
  description: string; // added for CRUD
  stock: number;
  color: string; // added for CRUD
  price: number; // added for CRUD
  size?: Sizes;
  // category: { // add this new property (suboject) and update main.ts
  //   id: string | number;
  //   name: string;
  category: Category;
  isNew: boolean; // added for CRUD
  tags: string[]; // added for CRUD
}

// type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>;
// it is better to create a nwe interface and extend it omitting the properties and adding a new property
// we cretaed it and moved to its own file: product.dto.ts

export {
  Sizes,
  Product,
  // CreateProductDto moved to product.dto.ts beacuse good practices
}
