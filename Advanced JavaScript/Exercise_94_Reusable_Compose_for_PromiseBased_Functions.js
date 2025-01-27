// Exercise 94: Reusable Compose for Promise-Based Functions

function composePromises(...fns) {
return (input) => {
return fns.reduce((chain, fn) => chain.then(fn), Promise.resolve(input));
};
}
function step1(x) { return Promise.resolve(x + 1); }
function step2(x) { return Promise.resolve(x * 2); }
let pipeline = composePromises(step1, step2);
pipeline(5).then((result) => console.log(result)); // (5+1)*2 = 12
Each function is stepX(x) returning a promise.
We reduce over them, chaining .then(fn) calls.