// Exercise 83: Nested Delegation with closest()

Exercise 83: Nested Delegation with closest()
Use closest() to climb up to the relevant parent if the click is on a child.
<ul id="list">
<li data-item="A"><span>Item A span</span></li>
document.getElementById("list").addEventListener("click", (e) => {
let li = e.target.closest("li[data-item]");
if (!li) return;
console.log("Clicked item:", li.dataset.item);
});
If the user clicks the <span>, closest("li[data-item]") finds the <li> ancestor.