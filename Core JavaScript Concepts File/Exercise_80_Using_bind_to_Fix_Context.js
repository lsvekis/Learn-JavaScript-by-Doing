// Exercise 80: Using bind() to Fix Context

Exercise 80: Using bind() to Fix Context
let person = {
greet: function() {
console.log("Hello, I'm", this.name);
}
};
let greetFn = person.greet;
greetFn(); // undefined, as 'this' is lost
let boundGreet = person.greet.bind(person);
boundGreet(); // "Hello, I'm Bob"
bind(person) returns a new function with this permanently set to person.