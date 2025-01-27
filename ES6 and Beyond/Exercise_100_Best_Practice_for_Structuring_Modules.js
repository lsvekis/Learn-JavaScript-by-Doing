// Exercise 100: Best Practice for Structuring Modules

export * from './user.js';
export * from './product.js';
import { createUser, getProducts } from './modules/index.js';