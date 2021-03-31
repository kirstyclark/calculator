"use strict";

// Logging the last button pressed
var lastButton;
var answer;
keypad.addEventListener("click", function (event) {
  lastButton = event.target.className;
}); // Background animation when a button is clicked

var counter = 0;
keypad.addEventListener("click", function (event) {
  counter = counter + 1;

  if (counter % 2 == 0) {
    document.getElementById('background').classList.add('background2');
    document.getElementById('background').classList.remove('background');
  } else {
    document.getElementById('background').classList.add('background');
    document.getElementById('background').classList.remove('background2');
  }
}); //  AC button clearing keypad, 'lastButton' and past answers

var clickAc = function clickAc(event) {
  lastButton = "";
  console.log(lastButton);
  inputValue.innerHTML = "";
}; // Click digit


var numberValue = "";

var clickDigit = function clickDigit(event) {
  numberValue = event.target.value;
  inputValue.innerHTML = inputValue.innerHTML + numberValue;
}; // Click operator


var operatorValue = "";

var clickOperator = function clickOperator(event) {
  operatorValue = event.target.value;

  if (lastButton == 'digit') {
    inputValue.innerHTML = inputValue.innerHTML + operatorValue;
  } else if (lastButton == 'ans') {
    inputValue.innerHTML = inputValue.innerHTML + operatorValue;
  } else if (lastButton == 'equals') {
    inputValue.innerHTML = inputValue.innerHTML + operatorValue;
  } else {
    inputValue.innerHTML = inputValue.innerHTML;
  }

  ;
}; // Click 'equals' button


var clickEquals = function clickEquals() {
  var digitArr = inputValue.innerHTML.split(operatorValue);
  var equation = digitArr.join(operatorValue);

  switch (operatorValue) {
    case "+":
      answer = parseFloat(digitArr[0]) + parseFloat(digitArr[1]);
      break;

    case "-":
      answer = parseFloat(digitArr[0]) - parseFloat(digitArr[1]);
      break;

    case "*":
      answer = parseFloat(digitArr[0]) * parseFloat(digitArr[1]);
      break;

    case "/":
      answer = parseFloat(digitArr[0]) / parseFloat(digitArr[1]);
      break;

    case "%":
      answer = parseFloat(digitArr[0]) / 100;
      break;

    default:
      answer = numberValue;
      break;
  }

  if (answer === numberValue) {
    inputValue.innerHTML = answer;
  } else {
    inputValue.innerHTML = equation + "<br/>" + answer;
  }
}; // Click 'ans' button


var clickAns = function clickAns(event) {
  if (answer == "") {
    inputValue.innerHTML = inputValue.innerHTML;
  } else {
    if (lastButton == 'operator') {
      inputValue.innerHTML = inputValue.innerHTML + answer;
    } else if (lastButton == 'equals') {
      inputValue.innerHTML = inputValue.innerHTML;
    } else if (lastButton == 'ac') {
      inputValue.innerHTML = "";
    } else {
      inputValue.innerHTML = inputValue.innerHTML;
    }
  }
}; // Digit clicks


var oneClick = document.getElementById("one").addEventListener("click", clickDigit);
var twoClick = document.getElementById("two").addEventListener("click", clickDigit);
var threeClick = document.getElementById("three").addEventListener("click", clickDigit);
var fourClick = document.getElementById("four").addEventListener("click", clickDigit);
var fiveClick = document.getElementById("five").addEventListener("click", clickDigit);
var sixClick = document.getElementById("six").addEventListener("click", clickDigit);
var sevenClick = document.getElementById("seven").addEventListener("click", clickDigit);
var eightClick = document.getElementById("eight").addEventListener("click", clickDigit);
var nineClick = document.getElementById("nine").addEventListener("click", clickDigit);
var zeroClick = document.getElementById("zero").addEventListener("click", clickDigit);
var pointClick = document.getElementById("point").addEventListener("click", clickDigit); // Operator clicks

var percentClick = document.getElementById("percentage").addEventListener("click", clickOperator);
var divideClick = document.getElementById("divide").addEventListener("click", clickOperator);
var multiplyClick = document.getElementById("multiply").addEventListener("click", clickOperator);
var subtractClick = document.getElementById("subtract").addEventListener("click", clickOperator);
var addClick = document.getElementById("add").addEventListener("click", clickOperator); // Special clicks

var ansClick = document.getElementById("ans").addEventListener("click", clickAns);
var acClick = document.getElementById("ac").addEventListener("click", clickAc);
var equalClick = document.getElementById("equals").addEventListener("click", clickEquals); // General tracking

var buttonClick = document.getElementById("keypad");
var inputValue = document.getElementById("input__box");