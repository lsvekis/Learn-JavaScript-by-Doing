// Exercise 88: Simple Generator Function Introduction

What You’ll Learn: Although a bit advanced, a brief intro to generators (function*).
Learning Objectives:
function* numberGen() {
yield 1;
yield 2;
yield 3;
}
let gen = numberGen();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
function* defines a generator that can pause (yield) and resume.