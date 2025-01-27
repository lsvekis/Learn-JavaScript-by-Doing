// Exercise 75: Recursion Example

function factorial(n) {
if (n <= 1) return 1;
return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
factorial(n) calls itself with n - 1.