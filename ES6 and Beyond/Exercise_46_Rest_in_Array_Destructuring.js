// Exercise 46: Rest in Array Destructuring

let items = ["apple", "banana", "cherry", "date"];
let [firstItem, secondItem, ...restItems] = items;
console.log(firstItem, secondItem); // apple, banana
console.log(restItems); // ["cherry", "date"]