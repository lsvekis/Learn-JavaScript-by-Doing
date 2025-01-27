// 99. Updating a JSON Object

let jsonData = '{"score":10,"level":2}';
let obj = JSON.parse(jsonData);
obj.score += 5;
let updatedJSON = JSON.stringify(obj);
console.log(updatedJSON);