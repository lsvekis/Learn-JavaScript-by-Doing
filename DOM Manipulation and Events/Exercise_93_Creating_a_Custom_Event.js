// Exercise 93: Creating a Custom Event

<div id="box">Box</div>
let box = document.getElementById("box");
box.addEventListener("mySpecialEvent", (e) => {
console.log("mySpecialEvent fired with detail:", e.detail);
});
let custom = new CustomEvent("mySpecialEvent", { detail: { message: "Hello" } });
box.dispatchEvent(custom);