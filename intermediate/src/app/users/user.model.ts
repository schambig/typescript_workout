import { BaseModel } from "../base.model";

enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

interface User extends BaseModel{
  // id: string | number; add this property through an extend using BaseModel
  username: string;
  role: ROLES; // use enum as Type Annotation
}

export {
  ROLES,
  User
}
