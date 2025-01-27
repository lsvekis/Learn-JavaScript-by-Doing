// 58. this in Nested Functions Pitfall

let obj = {
method: function() {
console.log("Outer this.name:", this.name);
function inner() {
console.log("Inner this.name:", this.name); // undefined
}
inner();
}
};
obj.method();
The inner function is not a method of obj, so this is not obj inside inner().