enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

interface User {
  id: string | number;
  username: string;
  role: ROLES; // use enum as Type Annotation
}

export {
  ROLES,
  User
}
