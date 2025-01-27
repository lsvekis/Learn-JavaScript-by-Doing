// Exercise 33: Illustrating Priority: Synchronous Code Always Runs First

setTimeout(() => console.log("timeout callback"), 0);
for (let i = 0; i < 1e7; i++) {
}
console.log("Loop done");
Despite a zero ms timeout, the loop completes first (synchronous).