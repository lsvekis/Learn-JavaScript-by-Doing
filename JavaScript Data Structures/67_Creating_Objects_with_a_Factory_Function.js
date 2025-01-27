// 67. Creating Objects with a Factory Function

function createUser(name, age) {
return {
greet() {
console.log(`Hello, I'm ${this.name}`);
}
};
}
let user1 = createUser("Kate", 22);
user1.greet();