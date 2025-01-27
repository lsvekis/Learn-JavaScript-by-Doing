// Exercise 88: Renaming Exports

function internalFunc() {
console.log("I am internal");
}
export { internalFunc as publicName };