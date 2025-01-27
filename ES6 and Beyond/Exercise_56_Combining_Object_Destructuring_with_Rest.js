// Exercise 56: Combining Object Destructuring with Rest

let settings = { theme: "dark", fontSize: 14, layout: "grid" };
let { theme, ...others } = settings;
console.log(theme);   // "dark"
console.log(others);  // { fontSize: 14, layout: "grid" }