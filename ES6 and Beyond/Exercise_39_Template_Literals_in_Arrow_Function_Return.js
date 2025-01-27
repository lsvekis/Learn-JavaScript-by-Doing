// Exercise 39: Template Literals in Arrow Function Return

const describeItem = (item, quantity) => `We have ${quantity} ${item}(s) in stock.`;
console.log(describeItem("Book", 15));