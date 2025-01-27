// Exercise 10: Repeated setInterval Example

let count = 0;
const intervalId = setInterval(() => {
count++;
console.log("Interval tick:", count);
if (count === 5) {
clearInterval(intervalId);
console.log("Interval cleared");
}
}, 1000);