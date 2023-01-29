(()=>{
  let prices = [1,2,2,1,1,212, 'hola', true]; // inferred type: (string | array | boolean)[]
  // prices.push('asas');
  // prices.push(true);
  // prices.push({});
  prices.push(121212);

  let products = ['hola', true]; // inferred value: (string | boolean)[]
  products.push(false);

  // using Type Annotation, do not infer
  let mixed: (number | string | boolean | Object)[] = ['hola', true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2]; // inferred value: number[]
  numbers.map(item => item * 2);
})();
