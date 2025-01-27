// Exercise 95: Throttling a scroll or resize Event

<body style="height:2000px;">
let ticking = false;
window.addEventListener("scroll", () => {
if (!ticking) {
window.requestAnimationFrame(() => {
console.log("Throttled scroll:", window.scrollY);
ticking = false;
});
ticking = true;
}
});