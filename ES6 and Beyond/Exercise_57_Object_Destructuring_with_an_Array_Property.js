// Exercise 57: Object Destructuring with an Array Property

let data = {
};
let { tags: [firstTag, secondTag, thirdTag] } = data;
console.log(firstTag, secondTag, thirdTag);