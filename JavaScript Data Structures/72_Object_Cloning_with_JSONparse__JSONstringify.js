// 72. Object Cloning with JSON.parse + JSON.stringify

Understand how to clone an object with JSON. (Note: doesn’t work well with functions or special object types.)
let original = { x: 1, nested: { y: 2 } };
let clone = JSON.parse(JSON.stringify(original));
clone.nested.y = 9;
console.log(original, clone);