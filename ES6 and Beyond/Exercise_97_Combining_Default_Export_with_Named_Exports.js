// Exercise 97: Combining Default Export with Named Exports

export default function mainService() {
console.log("Main service running...");
}
export function helper() {
console.log("Helper function!");
}
import mainService, { helper } from './service.js';
mainService();
helper();