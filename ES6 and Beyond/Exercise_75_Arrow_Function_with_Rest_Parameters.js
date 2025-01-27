// Exercise 75: Arrow Function with Rest Parameters

const multiplyAll = (...values) => {
return values.reduce((acc, val) => acc * val, 1);
};
console.log(multiplyAll(2, 3, 4)); // 24