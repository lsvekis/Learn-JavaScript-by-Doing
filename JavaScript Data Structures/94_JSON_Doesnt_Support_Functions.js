// 94. JSON Doesn’t Support Functions

let obj = {
doSomething: function() { console.log("Hello"); }
};
console.log(JSON.stringify(obj)); // {"name":"I have a function"}