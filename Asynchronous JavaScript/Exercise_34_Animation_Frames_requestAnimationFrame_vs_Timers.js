// Exercise 34: Animation Frames (requestAnimationFrame) vs Timers

Exercise 34: Animation Frames (requestAnimationFrame) vs Timers
function animateBox(timestamp) {
console.log("Animating at time:", timestamp);
requestAnimationFrame(animateBox);
}
requestAnimationFrame(animateBox);