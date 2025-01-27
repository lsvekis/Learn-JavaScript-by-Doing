// 65. Copying an Object with Spread

let original = { x: 1, y: 2 };
let copy = { ...original };
copy.x = 9;
console.log(original, copy);
{ ...original } creates a new object with the same properties.