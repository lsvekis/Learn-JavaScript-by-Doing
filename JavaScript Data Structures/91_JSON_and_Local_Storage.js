// 91. JSON and Local Storage

What You’ll Learn: Storing JSON in localStorage (in a browser environment).
Learning Objectives:
let settings = { theme: "dark", fontSize: 14 };
localStorage.setItem("appSettings", JSON.stringify(settings));
let saved = localStorage.getItem("appSettings");
let parsed = JSON.parse(saved);
console.log(parsed);