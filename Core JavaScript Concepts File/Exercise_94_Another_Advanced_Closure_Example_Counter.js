// Exercise 94: Another Advanced Closure Example (Counter)

Exercise 94: Another Advanced Closure Example (Counter)
function createCounter() {
let count = 0;
return {
increment: function() {
count++;
return count;
},
decrement: function() {
count--;
return count;
}
};
}
let myCounter = createCounter();
console.log(myCounter.increment()); // 1
console.log(myCounter.decrement()); // 0