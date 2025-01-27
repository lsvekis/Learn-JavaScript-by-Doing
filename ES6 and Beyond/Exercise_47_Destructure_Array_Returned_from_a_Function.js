// Exercise 47: Destructure Array Returned from a Function

function getCoordinates() {
return [10, 20];
}
let [xCoord, yCoord] = getCoordinates();
console.log(xCoord, yCoord);