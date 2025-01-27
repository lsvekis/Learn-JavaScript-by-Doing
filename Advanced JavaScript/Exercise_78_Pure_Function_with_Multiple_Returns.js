// Exercise 78: Pure Function with Multiple Returns

function classifyAge(age) {
if (age < 13) return "child";
if (age < 20) return "teen";
return "adult";
}
console.log(classifyAge(10)); // "child"
console.log(classifyAge(15)); // "teen"
console.log(classifyAge(25)); // "adult"