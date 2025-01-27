// 66. Adding Methods Dynamically

let user = { name: "Helen" };
user.sayHi = function() {
console.log(`Hi, I'm ${this.name}`);
};
user.sayHi();