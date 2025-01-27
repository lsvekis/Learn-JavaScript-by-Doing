// Exercise 92: Storing Functions in Objects

let calculator = {
add(num) {
this.value += num;
return this.value;
}
};
console.log(calculator.add(10)); // 10
console.log(calculator.add(5));  // 15