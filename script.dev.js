"use strict";

// const buttonClick = document.getElementById("keypad", clickButton);
// let clickButton = (event) => {
//   console.log("button click");
// };
// // const buttonClick = document.getElementById('keypad');
// // keypad.addEventListener('click', (event) => {
// //   const isButton = event.target.nodeName === 'BUTTON';
// //   if (!isButton) {
// //     return;
// //   }
// })
// let lastButtonPressed = document
//   .getElementById("keypad")
//   .addEventListener("click");
// if (lastButtonPressed == clickEquals) {
// }
var inputValue = document.getElementById("input__box");

var clickAc = function clickAc(event) {
  inputValue.innerHTML = "";
};

var answer; // const clickAns = (event) => {
//   if (answer === undefined) {
//     inputValue.value = inputValue.value;
//   } else {
//     //   if the last button pressed was a digit, start a new line
//     //   if ()
//     inputValue.value = inputValue.value + answer;
//   }
// };

var numberValue = "";

var clickDigit = function clickDigit(event) {
  numberValue = event.target.value;
  inputValue.innerHTML = inputValue.innerHTML + numberValue;
};

var operatorValue = "";

var clickOperator = function clickOperator(event) {
  operatorValue = event.target.value;
  inputValue.innerHTML = inputValue.innerHTML + operatorValue;
};

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
    inputValue.innerHTML = equation + "<br/>" + answer + "=";
  }
}; // const inputArr = inputValue.value.split('');
// const operatorsArr = ['*', '/', '-', '+'];
// // // 4. We need a check somewhere for NO Operators and stop this calculation in it's tracks
// for (let index=0; index < operatorsArr.length; index++) {
//     if (inputArr.includes(operatorsArr[index])) {
//         return equation();
//     } else {
//         return inputValue;
//     }
// }
// const equation = (inputArr, operatorsArr) => {
// }
// operators.forEach(operator => {
// })
// operators.forEach(operator => {
//     // 5. Go through each operator... Start with * as it has priority
//     console.log("THE OPERATOR WE@RE LOOKING AT IS " + operator);
//     equaiton.forEach(character => {
//         console.log(character);
//         // 1. If it's the operator we're looking && it's not a number
//         //      - store the number BEFORE the operator
//         //      - store the number AFTER the operator
//         //      - Do a switchcase and calculate the value
//         //      - Store as the calculation SO FAR! then start again and look for next most important
//     })
// })
// inputValue, numberValue, operatorValue, event
//         7. Store the value in a variable
//         3. Keep a note of the operator which was clicked
//         4. OPTION #1 - change the function which is run when the = is clicked
//                        (e.g. We click "+" this means the "=" needs to run a doAddition(param1,param2))
//         ... HOPE the user puts in another number (e.g. 3)
//         1. Onclick of the button
//         2. add the number to the input box
//         3. IF the input already has a value -> append it to the end of the current value
//         ... equals button
//         1. Function for the equal button is clicked
//         2. Calculate the result
//         3. Get the first parameter , get the operator, get the second parameter
//         4. OPTION #2 - Use a switchcase on the operator to decide how to calculate the result
//         5. Show this result to the user
//         6. Return/Show it on the screen -> .innerHTML = <theresult>;
//     --></theresult>


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
var pointClick = document.getElementById("point").addEventListener("click", clickDigit);
var percentClick = document.getElementById("percentage").addEventListener("click", clickOperator);
var divideClick = document.getElementById("divide").addEventListener("click", clickOperator);
var multiplyClick = document.getElementById("multiply").addEventListener("click", clickOperator);
var subtractClick = document.getElementById("subtract").addEventListener("click", clickOperator);
var addClick = document.getElementById("add").addEventListener("click", clickOperator); // const ansClick = document
//   .getElementById("ans")
//   .addEventListener("click", clickAns);

var acClick = document.getElementById("ac").addEventListener("click", clickAc);
var equalClick = document.getElementById("equals").addEventListener("click", clickEquals);