import axios from 'axios';

(async ()=> {

  function delay (time: number) {
    const promise = new Promise<string>((resolve) => { // Promise inferred type value is 'unknown' that's why we use <string>
      setTimeout(() => {
        resolve('string');
      }, time);
    });
    return promise; // the data type of promise is string due to line 6
  }

  // now we will use promises with axios
  // (local function) getProducts(): Promise<AxiosResponse<any, any>> (vscode info)
  // notice that this function returns a promise
  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  // create a new function using async to execute await within the function
  // (local function) getProductsAsync(): Promise<any> (vscode info)
  // notice that this function returns a promise
  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.log('>>>'.repeat(10));
  const rta = await delay(3000); // await returns the reponse/value of the promise, it is not a promise anymore
  console.log(rta);
  console.log('---'.repeat(10));
  const products = await getProducts();
  console.log(products.data); // we need to especify '.data' to retrieve just that
  console.log('***'.repeat(10));
  const productsv2 = await getProductsAsync();
  console.log(productsv2); // there's no need to specify '.data' because we've already did it, line 23
})();
