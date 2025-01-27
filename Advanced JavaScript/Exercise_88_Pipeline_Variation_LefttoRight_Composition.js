// Exercise 88: Pipeline Variation (Left-to-Right Composition)

Exercise 88: Pipeline Variation (Left-to-Right Composition)
function pipeAll(...fns) {
return (x) => {
return fns.reduce((acc, fn) => fn(acc), x);
};
}
let inc = (x) => x + 1;
let double = (x) => x * 2;
let pipeline = pipeAll(inc, double);
console.log(pipeline(3)); // (3+1)*2 = 8