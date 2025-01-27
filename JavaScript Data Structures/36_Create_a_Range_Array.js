// 36. Create a Range Array

function createRange(start, end) {
let arr = [];
for (let i = start; i <= end; i++) {
arr.push(i);
}
return arr;
}
console.log(createRange(1, 5));