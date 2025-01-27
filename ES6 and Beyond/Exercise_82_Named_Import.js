// Exercise 82: Named Import

Understand the import { ... } from 'module' syntax.
export function square(x) {
return x * x;
}
import { square } from './mathUtils.js';
console.log(square(5)); // 25
The curly braces in import { square } match the named export from mathUtils.js.