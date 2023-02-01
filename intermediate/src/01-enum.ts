/*
  enums are like Literal Types
  use reserved keyword 'enum', and create a set of options
  enum uses string and number values for its options
  use uppercase: This is because enums are often used to define a set of named constants,
  and using uppercase helps distinguish them from other variables. Additionally,
  using uppercase makes it easier to spot the difference between an enum and a regular variable,
  especially in large codebases. However, there is no strict requirement to use uppercase,
  and you can use any naming convention that you prefer.
*/
enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

// using enum
// first create a type then use it
type User = {
  username: string;
  role: ROLES; // use enum as Type Annotation
}

const saloUser: User = { // we have to define username and role
  username: 'schambig',
  // this is the way to assing a value to role, first call the enum then one of its options
  role: ROLES.SELLER
}
