// Exercise 99: Handling load Event on an Image

What You’ll Learn: img.addEventListener("load", ...).
Learning Objectives:
<img id="pic" src="https://via.placeholder.com/150" />
let pic = document.getElementById("pic");
pic.addEventListener("load", () => {
console.log("Image loaded!");
});
pic.addEventListener("error", () => {
console.log("Image failed to load.");
});