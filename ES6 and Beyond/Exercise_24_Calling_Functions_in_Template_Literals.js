// Exercise 24: Calling Functions in Template Literals

function getYear() {
return new Date().getFullYear();
}
let result = `The current year is ${getYear()}`;
console.log(result);
Template literals allow function calls in ${}; the result is converted to a string.