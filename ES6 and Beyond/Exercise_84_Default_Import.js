// Exercise 84: Default Import

export default function multiply(a, b) {
return a * b;
}
import multiplyFn from './mathStuff.js';
console.log(multiplyFn(3, 4));
import multiplyFn is entirely user-chosen; the exported name doesn’t matter for a default export.