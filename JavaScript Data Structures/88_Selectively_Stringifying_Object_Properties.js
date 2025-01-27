// 88. Selectively Stringifying Object Properties

let user = { name: "George", password: "secret", age: 28 };
function replacer(key, value) {
if (key === "password") return undefined; // omit password
return value;
}
let safeJSON = JSON.stringify(user, replacer, 2);
console.log(safeJSON);