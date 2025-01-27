// Exercise 8: Updating a Closed-Over Variable

Variables aren’t frozen at the time of closure creation; they remain mutable.
function accumStart(num) {
return function(add) {
num += add;
return num;
};
}
let accum = accumStart(10);
console.log(accum(5));   // 15
console.log(accum(3));   // 18