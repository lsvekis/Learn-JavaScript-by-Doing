// Exercise 83: Default Export

export default function log(message) {
console.log("[LOG]", message);
}
import log from './logger.js';
log("Hello World");