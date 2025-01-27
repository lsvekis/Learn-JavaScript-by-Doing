// Exercise 47: Overriding Prototype Methods

function Worker(name) {
this.name = name;
}
Worker.prototype.doWork = function() {
console.log(this.name + " is working");
};
function Developer(name, language) {
Worker.call(this, name);
this.language = language;
}
Developer.prototype = Object.create(Worker.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype.doWork = function() {
console.log(this.name + " is coding in " + this.language);
};
let dev = new Developer("Alice", "JavaScript");
dev.doWork(); // "Alice is coding in JavaScript"