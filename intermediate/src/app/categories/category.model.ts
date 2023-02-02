import { BaseModel } from "../base.model";

// we will use this interface as a new property of Product interface in ../products/product.model.ts
export interface Category extends BaseModel{
  // id: string | number; add this property through an extend using BaseModel
  name: string;
}

/*
  This is another way to export

  export {
    Category
  }
*/
