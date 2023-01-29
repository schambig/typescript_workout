(()=> {
  //  let myNumber: number = undefined;
  //  let myString: string = null;
    let myNull: null = null; // using Type Annotation, do not infer
    let myUndefined: undefined = undefined; // using Type Annotation, do not infer

    // Use Union Type to initialize in null and change later to number
    let myNumber: number | null = null;
    myNumber = 12;

    // Use Union Type to initialize in undefined and change later to string
    let myString: string | undefined = undefined;
    myString = 'word';

    function hi(name: string | null) {
      let hello = 'Hola '; // inferred value: string
      if (name) {
        hello += name.toLowerCase();
      } else {
        hello += 'nobody';
      }
      console.log(hello);
    }

    function hiV2(name: string | null) {
      let hello = 'Hola ';
      /*
        'name?' recognize the possible null value and aks if name exists.
        The use of '?' is known as Optional Chaining and It allows to access properties of an object that might be null or undefined
        and if they are, the expression returns undefined instead of throwing an error. It is denoted by the ?. operator.
        It is a JS functionality
      */
      hello += name?.toLowerCase() || 'nobody';
      console.log(hello);
    }

    hi('SALOMON');
    hi(null);

    hiV2('SALOMON');
    hiV2(null);
})();
