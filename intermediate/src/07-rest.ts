// we needed to export type User and enum ROLES from 01-enum.ts
import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'schambig',
  role: ROLES.CUSTOMER
}

// function that checks the ROLE of a user, but it checks for just one ROLE
export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) { // we can also use 'admin' string instead of ROLES.ADMIN enum
    return true;
  }
  return false;
}

const rta = checkAdminRole();
console.log('checkAdminRole', rta);

// now let's make a function that checks for more than one available ROLE value,
// using just conditionals
export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
}

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole', rta2);

// now let's use an array to check the roles and again use if conditional
export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]); // we need to use an array to pass the parameters
console.log('checkRoleV2', rta3);

// now let's use rest parameters '(...)' to check for a ROLE and just ONE conditional
export const checkRoleV3 = (...roles: string[]) => { // use Type Annotation: string[]
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkRoleV3', rta4);
