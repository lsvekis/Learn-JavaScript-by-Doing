// Exercise 73: Checking Purity with an External Array

let arr = [1, 2];
function pushImpure(value) {
arr.push(value);
return arr.length;
}
pushImpure(3);
console.log(arr); // [1, 2, 3] (side effect)