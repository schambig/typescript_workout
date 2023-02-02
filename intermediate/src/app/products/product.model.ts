import { Category } from "../categories/category.model";

type Sizes = 'S' | 'M' | 'L' | 'XL'; // Sizes can only be these values
// interface need a body to be defined
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
  // category: { // add this new property (suboject) and update main.ts
  //   id: string | number;
  //   name: string;
  category: Category;
}

export {
  Sizes,
  Product
}
