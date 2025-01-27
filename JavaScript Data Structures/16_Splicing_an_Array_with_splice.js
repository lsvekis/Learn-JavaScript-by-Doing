// 16. Splicing an Array with splice()

16. Splicing an Array with splice()
Understand that splice() mutates the array directly.
let arr = ["a", "b", "c", "d"];
let removed = arr.splice(1, 2, "x", "y");
console.log("Modified:", arr);
console.log("Removed:", removed);
splice(startIndex, deleteCount, ...itemsToInsert).