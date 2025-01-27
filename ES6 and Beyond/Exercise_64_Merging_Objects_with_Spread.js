// Exercise 64: Merging Objects with Spread

let defaults = { theme: "light", layout: "grid" };
let userSettings = { theme: "dark" };
let finalSettings = { ...defaults, ...userSettings };
console.log(finalSettings); // { theme: "dark", layout: "grid" }