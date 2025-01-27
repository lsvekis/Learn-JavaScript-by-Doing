// Exercise 46: Self-Invented Promise with Callbacks (Conceptual)

Exercise 46: Self-Invented Promise with Callbacks (Conceptual)
function myPromiseSim() {
let successHandlers = [];
let resolve = (val) => successHandlers.forEach((fn) => fn(val));
return {
then(fn) { successHandlers.push(fn); },
doResolve(val) { resolve(val); },
};
}
let pseudo = myPromiseSim();
pseudo.then((val) => console.log("Got:", val));
setTimeout(() => {
pseudo.doResolve("Fake promise resolved!");
}, 500);
This is a minimal demonstration of the concept: multiple .then() calls store handlers, then they’re called upon “resolve.”