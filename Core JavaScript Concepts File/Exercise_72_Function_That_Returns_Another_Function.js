// Exercise 72: Function That Returns Another Function

function createMultiplier(multiplier) {
return function(value) {
return value * multiplier;
};
}
let double = createMultiplier(2);
console.log(double(5)); // 10