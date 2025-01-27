// 14. Slicing an Array with slice()

14. Slicing an Array with slice()
Use slice(start, end) to create a sub-array.
let arr = ["alpha", "beta", "gamma", "delta"];
let sliced = arr.slice(1, 3);
console.log("Original:", arr);
console.log("Sliced:", sliced);
slice(1,3) returns elements from index 1 up to (but not including) index 3.