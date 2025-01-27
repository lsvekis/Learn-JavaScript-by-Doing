// Exercise 2: Closure with Parameters

function multiplier(factor) {
return function(number) {
return number * factor;
};
}
let double = multiplier(2);
console.log(double(5)); // 10