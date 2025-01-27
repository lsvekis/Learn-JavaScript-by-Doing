// Exercise 30: Real-Time Feeds / Chat

function fetchNewMessages() {
setInterval(() => {
console.log("Fetched new chat messages at", new Date().toLocaleTimeString());
}, 3000);
}
fetchNewMessages();
console.log("Chat is live while fetching occurs repeatedly");