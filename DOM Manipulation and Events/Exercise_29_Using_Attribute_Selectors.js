// Exercise 29: Using Attribute Selectors

<input type="text" placeholder="Enter text" />
let input = document.querySelector("input[placeholder='Enter text']");
console.log(input);
[placeholder='Enter text'] matches the input whose placeholder is exactly "Enter text".