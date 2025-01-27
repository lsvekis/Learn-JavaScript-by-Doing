// 59. Using bind() to Preserve this

59. Using bind() to Preserve this
let obj = {
method: function() {
console.log("Outer:", this.name);
function inner() {
console.log("Inner:", this.name);
}
let boundInner = inner.bind(this);
boundInner();
}
};
obj.method();
inner.bind(this) returns a new function with the same this as obj.method.