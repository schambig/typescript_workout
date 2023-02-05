import { Product } from "./product.model";

interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
};

// opposite of Omit utility type (same implementation)
type example = Pick<Product, 'color' | 'description'>;

// Partial Utility Type make all CreateProductDto properties optional
// except for those that are omitted
interface UpdateProductDto extends Partial<CreateProductDto> {};

// opposite of Partial utility type (same implementation)
// this utility type make all properties mandatory (obligatorias)
type example2 = Required<Product>;

// Readonly Utility Type sets all properties to readonly type
// because we do not need to change the values when we are looking for a specific product
// we need to apply this utility type on the Partial<Product>
interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
};

export {
  CreateProductDto,
  UpdateProductDto,
  FindProductDto
}
