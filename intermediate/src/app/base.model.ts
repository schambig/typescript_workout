// create a new interface to extend the properties of another one
// we will extend the interfaces located in all *.model.ts files (04)
export interface BaseModel {
  id: string | number;
  createdAt: Date;
  updatedAt: Date;
}
