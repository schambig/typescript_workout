"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// var _ = require('lodash'); with '_' we import the library, so let's do it with import
const lodash_1 = __importDefault(require("lodash"));
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
const rta = lodash_1.default.groupBy(data, (item) => item.role);
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
