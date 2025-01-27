// Exercise 58: Class Fields (Public Fields)

Exercise 58: Class Fields (Public Fields)
class Counter {
count = 0; // public field
increment() {
this.count++;
}
}
let c = new Counter();
c.increment();
console.log(c.count); // 1
count = 0; is a class field specifying a property on each new instance, avoiding the need to define it in the constructor.