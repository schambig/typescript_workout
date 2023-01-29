(()=>{
  // use Type Annotation for parameter and return value, do not infer
  const calcTotal = (prices: number[]): string => {
    let total = 0; // inferred value: number
    prices.forEach((item)=> {
      total += item;
    });
    // use toString() method because 'total' is number value and we said earlier
    // that this function will return a string
    return total.toString();
  }

  // use Type Annotation (: void) for the return of the function
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }

  printTotal([1,2,1,1,1]);
})();
