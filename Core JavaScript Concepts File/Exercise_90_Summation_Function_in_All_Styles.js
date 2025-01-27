// Exercise 90: Summation Function in All Styles

function sumDecl(a, b) {
return a + b;
}
const sumExpr = function(a, b) {
return a + b;
};
const sumArrow = (a, b) => a + b;
console.log(sumDecl(2, 3));
console.log(sumExpr(2, 3));
console.log(sumArrow(2, 3));
All three produce the same result but differ in syntax and how this is handled (arrow vs function).