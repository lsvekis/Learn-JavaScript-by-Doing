// Exercise 100: Final Currying Example – Partial Application in Real Use

function handleEvent(eventType) {
return function(element) {
return function(callback) {
element.addEventListener(eventType, callback);
};
};
}
const onClick = handleEvent("click");
let btn = document.getElementById("submitBtn");
onClick(btn)((e) => console.log("Clicked!", e));
// first call handleEvent("click") -> returns function(element){...}
// then onClick(btn) -> returns function(callback){...}
