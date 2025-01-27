// Exercise 84: Arrow Function Pitfalls with Object Methods

let userObj = {
greet: () => {
console.log("Name:", this.name);
}
};
userObj.greet(); // Name: undefined
Arrow functions capture the this from the outer scope (likely global), not from userObj.