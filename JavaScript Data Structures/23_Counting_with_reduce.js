// 23. Counting with reduce()

23. Counting with reduce()
let letters = ["a", "b", "a", "c", "b"];
let count = letters.reduce((acc, val) => {
acc[val] = (acc[val] || 0) + 1;
return acc;
}, {});
console.log(count);