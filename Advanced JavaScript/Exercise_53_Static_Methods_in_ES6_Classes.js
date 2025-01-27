// Exercise 53: Static Methods in ES6 Classes

class MathUtil {
static add(a, b) {
return a + b;
}
}
console.log(MathUtil.add(3, 4)); // 7
// let mu = new MathUtil();
// mu.add(...) // Error: not an instance method
static add() is invoked as MathUtil.add(), not on an instance.