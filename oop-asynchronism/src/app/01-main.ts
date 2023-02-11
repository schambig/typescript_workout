import axios from 'axios';

import { Product } from './models/product.model';

let anyVar: any = 12;
let boolVar: boolean = anyVar;

(async ()=> {

  // we can type the return of the function (line 11) this will work only for the return (outside the function)
  // if we want to use array methods (Product[]) we need to type the 'axios.get' like line 13
  // async function getProducts(): Promise<Product[]> {
  //   const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  //   return data;
  // }

  // if our library does not support typing syntaxis as above we can force it using 'as' (casting)
  // async function getProducts() {
  //   const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
  //   const data = rta.data as Product[];
  //   return data;
  // }

  // typing just 'axios.get' we can use arrays methods inside the function and outside, look at line 31
  async function getProducts() {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return data;
  }

  const products = await getProducts();
  console.log(products.map(item => `${item.id} - ${item.title}}`));
})();
