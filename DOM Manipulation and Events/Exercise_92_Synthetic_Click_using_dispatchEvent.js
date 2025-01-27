// Exercise 92: Synthetic Click using dispatchEvent()

Exercise 92: Synthetic Click using dispatchEvent()
<button id="btn">Click Manually</button>
let btn = document.getElementById("btn");
btn.addEventListener("click", () => console.log("Button was clicked!"));
let event = new Event("click");
btn.dispatchEvent(event);
dispatchEvent() triggers the event listeners as if a user clicked, but some default actions may not occur.