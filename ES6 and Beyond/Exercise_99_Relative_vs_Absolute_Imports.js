// Exercise 99: Relative vs Absolute Imports

export function showHeader() {
console.log("Header shown");
}
import { showHeader } from './header.js';
../ refers to the parent folder; a full URL can also be used in some modern environments.