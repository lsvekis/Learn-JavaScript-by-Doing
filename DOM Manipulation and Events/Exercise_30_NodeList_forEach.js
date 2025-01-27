// Exercise 30: NodeList forEach

What You’ll Learn: Iterating over a NodeList from querySelectorAll().
Learning Objectives:
Use .forEach() on a NodeList (supported in modern browsers).
let allParas = document.querySelectorAll("p");
allParas.forEach(p => {
console.log(p.textContent);
});
NodeLists from querySelectorAll can be iterated using .forEach().