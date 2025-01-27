// Exercise 39: createPipeline – Composing Functions in an Array

function createPipeline(funcs) {
return function(input) {
return funcs.reduce((acc, fn) => fn(acc), input);
};
}
let pipeline = createPipeline([
(x) => x + 1,
(x) => x * 2,
(x) => "Result: " + x
]);
console.log(pipeline(5)); // "Result: 12"