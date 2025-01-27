// Exercise 79: Pure Recursive Function (Factorial)

Exercise 79: Pure Recursive Function (Factorial)
function factorial(n) {
if (n <= 1) return 1;
return n * factorial(n - 1);
}
console.log(factorial(5)); // 120