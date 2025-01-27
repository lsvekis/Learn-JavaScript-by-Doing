// Exercise 87: Currying a Simple Function

function curryAdd(a) {
return function(b) {
return function(c) {
return a + b + c;
};
};
}
console.log(curryAdd(1)(2)(3)); // 6