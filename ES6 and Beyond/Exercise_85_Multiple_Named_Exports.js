// Exercise 85: Multiple Named Exports

export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
import { add, subtract } from './utils.js';
console.log(add(10, 5));      // 15
console.log(subtract(10, 5)); // 5