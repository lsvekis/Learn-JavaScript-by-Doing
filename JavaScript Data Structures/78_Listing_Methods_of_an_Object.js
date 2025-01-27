// 78. Listing Methods of an Object

let mathStuff = {
add(a, b) { return a + b; },
sub(a, b) { return a - b; },
};
for (let key in mathStuff) {
if (typeof mathStuff[key] === "function") {
console.log(`${key} is a method`);
}
}
We check typeof mathStuff[key] === "function" to detect methods.