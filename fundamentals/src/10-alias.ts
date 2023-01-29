(()=>{
  type UserID = string | number; // create a 'type'
  let userId: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL'; // create a 'type'
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 's'; // wrong, it MUST be one of the above

  function greeting(userId: UserID, shirtSize: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
   }
   greeting(1111, 'S');
   greeting('CODE', 'XL');

})();
