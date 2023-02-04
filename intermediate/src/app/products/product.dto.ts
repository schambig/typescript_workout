import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
};

// opposite of Omit utility type (same implementation)
type example = Pick <Product, 'color' | 'description'>;
