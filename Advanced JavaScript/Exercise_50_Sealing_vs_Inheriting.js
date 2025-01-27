// Exercise 50: Sealing vs. Inheriting

What You’ll Learn: The impact of Object.seal() on prototypes.
Learning Objectives:
let base = { baseProp: 1 };
Object.seal(base);
let derived = Object.create(base);
derived.derivedProp = 2;
console.log(derived.baseProp);     // 1
console.log(derived.derivedProp);  // 2
Object.seal(base) stops new properties from being added or removed from base.