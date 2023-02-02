import { BaseModel } from "../base.model";
import { Product } from "../products/product.model";
import { User } from "../users/user.model";

export interface Order extends BaseModel{
  // id: string | number; add this property through an extend using BaseModel
  // createdAt: Date; add this property through an extend using BaseModels
  products: Product[];
  user: User;
}
