// Exercise 57: Getters and Setters in ES6 Classes

class Rectangle {
constructor(width, height) {
this._width = width;
this._height = height;
}
get area() {
return this._width * this._height;
}
set width(newWidth) {
this._width = newWidth;
}
}
let rect = new Rectangle(5, 10);
console.log(rect.area); // 50
rect.width = 8;
console.log(rect.area); // 80
get area() is accessed like a property (rect.area) even though it’s a function behind the scenes.