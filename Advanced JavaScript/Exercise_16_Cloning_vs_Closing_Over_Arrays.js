// Exercise 16: Cloning vs. Closing Over Arrays

function trackArray(arr) {
return function() {
console.log("Array is:", arr);
};
}
let myArr = [1, 2];
let tracker = trackArray(myArr);
myArr.push(3);
tracker(); // "Array is: [1,2,3]"