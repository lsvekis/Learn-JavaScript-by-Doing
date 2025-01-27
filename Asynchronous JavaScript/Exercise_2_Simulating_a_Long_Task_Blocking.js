// Exercise 2: Simulating a Long Task (Blocking)

Exercise 2: Simulating a Long Task (Blocking)
console.log("Start blocking task");
let start = Date.now();
while (Date.now() - start < 3000) {
}
console.log("Done with blocking loop");
console.log("Next step");