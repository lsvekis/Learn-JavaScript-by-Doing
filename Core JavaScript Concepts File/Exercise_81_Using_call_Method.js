// Exercise 81: Using call() Method

Exercise 81: Using call() Method
function introduce() {
console.log(`Hello, I'm ${this.name}`);
}
let user = { name: "Charlie" };
introduce.call(user);
call(user) invokes introduce with this set to user.