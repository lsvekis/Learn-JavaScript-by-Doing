// Exercise 94: Function That Returns a Dynamic Import

export function loadModule(modulePath) {
return import(modulePath);
}
import { loadModule } from './dynamicLoader.js';
loadModule('./utils.js').then(utils => {
console.log("Utils loaded:", Object.keys(utils));
});