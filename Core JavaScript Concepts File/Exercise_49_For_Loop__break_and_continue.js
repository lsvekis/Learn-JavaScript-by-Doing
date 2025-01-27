// Exercise 49: For Loop - break and continue

for (let i = 1; i <= 10; i++) {
if (i === 5) {
continue; // skip printing 5
}
if (i === 8) {
break; // stop the loop
}
console.log(i);
}