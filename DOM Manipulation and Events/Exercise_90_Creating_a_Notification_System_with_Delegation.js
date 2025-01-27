// Exercise 90: Creating a Notification System with Delegation

<div id="notifs"></div>
let notifs = document.getElementById("notifs");
notifs.addEventListener("click", (e) => {
if (e.target.classList.contains("close")) {
e.target.parentElement.remove();
}
});
function addNotification(msg) {
let div = document.createElement("div");
div.innerHTML = msg + ' <span class="close">[x]</span>';
notifs.appendChild(div);
}
addNotification("Hello user!");
addNotification("Another message");