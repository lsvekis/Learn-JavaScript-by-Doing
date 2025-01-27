// Exercise 98: Reading Two Endpoints and Merging Data

async function getCombinedData() {
let [usersRes, postsRes] = await Promise.all([
fetch("https://jsonplaceholder.typicode.com/users"),
fetch("https://jsonplaceholder.typicode.com/posts"),
]);
let users = await usersRes.json();
let posts = await postsRes.json();
let userMap = {};
users.forEach((u) => (userMap[u.id] = { ...u, posts: [] }));
posts.forEach((p) => {
if (userMap[p.userId]) userMap[p.userId].posts.push(p);
});
console.log("Combined data:", userMap);
}
getCombinedData();