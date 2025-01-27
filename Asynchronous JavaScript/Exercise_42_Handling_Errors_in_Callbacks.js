// Exercise 42: Handling Errors in Callbacks

Understand how Node.js typically structures callbacks: (err, data).
function getUser(id, callback) {
setTimeout(() => {
if (id < 1) {
callback(new Error("Invalid user id"));
} else {
callback(null, { id, name: "User" + id });
}
}, 500);
}
getUser(0, (err, user) => {
if (err) return console.log("Error:", err.message);
console.log("User data:", user);
});