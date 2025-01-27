// 68. Object Constructor Function

function Person(name) {
this.name = name;
this.greet = function() {
console.log(`Hi from ${this.name}`);
};
}
let p = new Person("Bob");
p.greet();
new Person("Bob") sets this to a new object and returns it.