// Exercise 16: Using a Blocking API Call (Simulated) vs. Non-Blocking

Exercise 16: Using a Blocking API Call (Simulated) vs. Non-Blocking
function blockingFetchSim() {
let start = Date.now();
while (Date.now() - start < 2000) {} // block 2 seconds
return "Data from blocking fetch";
}
console.log("A");
let result = blockingFetchSim();
console.log("B:", result);