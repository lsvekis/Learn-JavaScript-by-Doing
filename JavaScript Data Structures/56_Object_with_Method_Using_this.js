// 56. Object with Method (Using this)

56. Object with Method (Using this)
let calculator = {
add: function (num) {
this.value += num;
}
};
calculator.add(5);
console.log(calculator.value);