// Exercise 87: Creating a More Flexible Compose for Multiple Functions

function composeAll(...fns) {
return (x) => {
return fns.reduceRight((acc, fn) => fn(acc), x);
};
}
let inc = (x) => x + 1;
let double = (x) => x * 2;
let negate = (x) => -x;
let combined = composeAll(negate, double, inc);
console.log(combined(3)); // -((3+1)*2) = -8