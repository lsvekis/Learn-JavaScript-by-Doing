// Exercise 57: Using continue in While Loop

let j = 0;
while (j < 5) {
j++;
if (j === 3) {
continue; // skip printing 3
}
console.log(j);
}
If j is 3, the loop continues without executing console.log(j).