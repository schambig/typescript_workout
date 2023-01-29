(()=> {
  let isEnable = true; // inferred value: boolean
 //  isEnable = 'as';
 //  isEnable = 1212;
  isEnable = false;

  let isNew: boolean = false; // using Type Annotation, expicit
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random(); // this gives us a number between 0 and 1
  console.log('random', random);
  isNew = random >= 0.5 ? true : false; // ternary, we also can use 'random>=0.5'
  console.log('isNew', isNew);

  const myBoolean: boolean = true; // Boolean =/= boolean
})();
