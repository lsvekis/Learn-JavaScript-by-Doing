// Exercise 73: Observing the Call Stack with a Recursive Function

function recurse(count) {
if (count <= 0) return;
console.log("Stack depth:", count);
recurse(count - 1);
}
recurse(3);
console.log("Done recursion");