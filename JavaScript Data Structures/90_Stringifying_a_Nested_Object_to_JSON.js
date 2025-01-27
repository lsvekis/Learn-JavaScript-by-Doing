// 90. Stringifying a Nested Object to JSON

let article = {
author: { name: "Helen", id: 123 },
};
let str = JSON.stringify(article, null, 2);
console.log(str);