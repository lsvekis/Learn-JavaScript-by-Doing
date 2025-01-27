// 87. Handling Arrays in JSON

let arr = [{ id: 1 }, { id: 2 }];
let jsonStr = JSON.stringify(arr);
console.log(jsonStr);
console.log(JSON.parse(jsonStr));
Arrays are stringified as [ { ... }, { ... } ]. Parsing them yields a JavaScript array of objects.