// Exercise 65: Encapsulation with Accessor Methods

class Player {
#score = 0;
addPoints(p) {
this.#score += p;
}
get score() {
return this.#score;
}
}
let pl = new Player();
pl.addPoints(10);
console.log(pl.score); // 10
// pl.#score = 100; // not allowed
We limit direct modifications of score by using private field #score plus a setter method (addPoints) or a getter (score).