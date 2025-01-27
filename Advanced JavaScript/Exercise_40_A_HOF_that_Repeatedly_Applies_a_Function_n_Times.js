// Exercise 40: A HOF that Repeatedly Applies a Function n Times

function repeat(fn, times) {
return function(input) {
let result = input;
for (let i = 0; i < times; i++) {
result = fn(result);
}
return result;
};
}
let triple = (x) => x * 3;
let triple5Times = repeat(triple, 5);
console.log(triple5Times(1)); // 3^5 times -> 243
Section 3: Object-Oriented Programming (OOP)