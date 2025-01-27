// Exercise 48: Destructure Array Parameter in a Function

function logPoints([x, y]) {
console.log(`X: ${x}, Y: ${y}`);
}
logPoints([5, 8]);
The function signature ([x, y]) destructures the array argument right away.