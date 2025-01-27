// 70. Counting Object Properties

Use Object.keys().length for a quick property count.
let album = { title: "Best Hits", tracks: 12, artist: "Unknown" };
let count = Object.keys(album).length;
console.log(count);
Object.keys(album) returns an array of the property names, so .length is how many properties exist.