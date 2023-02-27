// functions.js
function addTwoNumbers(firstNum, secondNum) {
  return firstNum + secondNum;
}

function sayHello(name) {
  if (name === 'Will') {
    return `No more testing ${name}!`;
  } else {
    return `Hi there ${name}!`;
  }
}

function buildCar(color, type) {
  let car = {};
  if (color) car.color = color;
  if (type) car.type = type;
  return car;
}

module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar
}