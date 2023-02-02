// we will use this interface as a new property of Product interface in ../products/product.model.ts
export interface Category {
  id: string | number;
  name: string;
}

/*
  This is another way to export

  export {
    Category
  }
*/
