// Exercise 81: Immutability with Arrays

function insertAtStart(arr, value) {
return [value, ...arr];
}
let original = [2, 3];
let updated = insertAtStart(original, 1);
console.log(original); // [2, 3]
console.log(updated);  // [1, 2, 3]