// Exercise 43: Callback Hell Example

function stepA(cb) { setTimeout(() => { console.log("A"); cb(); }, 100);}
function stepB(cb) { setTimeout(() => { console.log("B"); cb(); }, 200);}
function stepC(cb) { setTimeout(() => { console.log("C"); cb(); }, 300);}
stepA(() => {
stepB(() => {
stepC(() => {
console.log("All steps done");
});
});
});