// Exercise 75: addEventListener Options (Passive)

Exercise 75: addEventListener Options (Passive)
<body style="height:3000px;">
window.addEventListener("scroll", () => {
}, { passive: true });
passive: true means the handler won’t call preventDefault(), improving performance in events like scroll.