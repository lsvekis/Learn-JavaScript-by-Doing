// Exercise 71: Event Object Properties

<button id="btn">Click</button>
document.getElementById("btn").addEventListener("click", (e) => {
console.log("Event type:", e.type);
console.log("Event target:", e.target);
});
The event object (e) has data about the type of event and which element triggered it.