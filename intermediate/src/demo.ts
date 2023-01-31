type UserId = string | number; // create a new type, use Union Type
let userId: UserId;
// note that we can just use string and number values
userId = 'string';
userId = 1;

console.log('Hoola!' +  userId);
