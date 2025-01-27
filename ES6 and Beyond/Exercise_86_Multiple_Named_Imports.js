// Exercise 86: Multiple Named Imports

export const area = (r) => Math.PI * r * r;
export const circumference = (r) => 2 * Math.PI * r;
import { area, circumference } from './geometry.js';
console.log(area(5));
console.log(circumference(5));