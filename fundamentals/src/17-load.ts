// var _ = require('lodash'); with '_' we import the library, so let's do it with import
import _ from 'lodash';

const data = [
  {
    username: 'salo',
    role: 'admin'
  },
  {
    username: 'edu',
    role: 'seller'
  },
  {
    username: 'juan',
    role: 'seller'
  },
  {
    username: 'edgar',
    role: 'customer'
  }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
/*
  Output:
  ❯ node dist/17-load.js

  {
    admin: [ { username: 'salo', role: 'admin' } ],
    seller: [
      { username: 'edu', role: 'seller' },
      { username: 'juan', role: 'seller' }
    ],
    customer: [ { username: 'edgar', role: 'customer' } ]
  }
*/
