// 77. Creating an Object from an Array Using reduce()

77. Creating an Object from an Array Using reduce()
let keys = ["a", "b", "c"];
let result = keys.reduce((obj, key, index) => {
obj[key] = index;
return obj;
}, {});
console.log(result);