// Exercise 49: Adding Properties to an Existing Prototype

What You’ll Learn: We can augment built-in prototypes (though it’s generally not recommended).
Learning Objectives:
Array.prototype.first = function() {
return this[0];
};
let arr = [10, 20, 30];
console.log(arr.first()); // 10
This code modifies Array.prototype so every array can now use .first().