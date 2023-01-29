(()=>{
  /*
    Create Literal Types Sizes and Product.
    A Literal Type in TS is a type whose value is limited to a specific set of constant values.
    It allows you to specify exactly which values are valid for a given type.
    Literal types can be string literals, numeric literals, or boolean literals. Examples: 'hello', 42, true.
  */
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  // create a reusable object type, see use un line 11 and 13
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes // We could also set an optional property using '?' operator
  };

  const products: Product[] = []; // use Literal Type as Type Annotation

  const addProduct = (data: Product) => { // use Literal Type as Type Annotation
    products.push(data);
  }

  addProduct({
    title: 'Pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12
  });
  addProduct({
    title: 'Pro2',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'XL'
  });
  console.log(products);
  products.push({
    title: 'Prod3',
    createdAt: new Date(1992, 1, 1),
    stock: 12,
    size: 'XL'
  });
})();
