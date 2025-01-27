// Exercise 24: Array filter()

Exercise 24: Array filter()
let words = ["apple", "cat", "aardvark"];
let aWords = words.filter((w) => w.startsWith("a"));
console.log(aWords); // ["apple", "aardvark"]
The callback checks w.startsWith("a"). True means the element is included in the resulting array.