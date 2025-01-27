// Exercise 82: Storing Data in dataset

<ul id="productList">
<li data-id="101">Product A</li>
<li data-id="102">Product B</li>
let productList = document.getElementById("productList");
productList.addEventListener("click", (e) => {
if (e.target.matches("li[data-id]")) {
console.log("Clicked product ID:", e.target.dataset.id);
}
});