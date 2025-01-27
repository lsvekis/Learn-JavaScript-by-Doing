// Exercise 89: Importing Everything As an Object

export function greet() { console.log("Hello"); }
export function farewell() { console.log("Goodbye"); }
import * as Helpers from './helpers.js';
Helpers.greet();
Helpers.farewell();