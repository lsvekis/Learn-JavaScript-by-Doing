// 76. Iterating Over Object.entries()

76. Iterating Over Object.entries()
let user = { name: "Sarah", age: 28 };
for (let [key, value] of Object.entries(user)) {
console.log(key, value);
}