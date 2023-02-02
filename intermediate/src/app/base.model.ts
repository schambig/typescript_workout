// create a new interface to extend the properties of another one
// we will extend the interfaces located in all *.model.ts files (04)
export interface BaseModel {
  readonly id: string | number; // readonly prevent a variable to be overwritten\
  readonly createdAt: Date; // making it read only
  updatedAt: Date;
}
