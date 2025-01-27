// Exercise 79: Combining Spread and Rest in the Same Function

function showItems(...items) {
console.log("Items:", items);
}
let arr = [1, 2, 3];
showItems(...arr, 4, 5); // Items: [1, 2, 3, 4, 5]