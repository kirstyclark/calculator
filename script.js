// Logging the last button pressed
let lastButton;
let answer;

keypad.addEventListener("click", (event) => {
  lastButton = event.target.className;
});


// Background animation when a button is clicked
let counter = 0;

keypad.addEventListener("click", (event) => {
  counter = counter + 1;

  if (counter % 2 == 0) {
    document.getElementById('background').classList.add('background2');
    document.getElementById('background').classList.remove('background');

  } else {
    document.getElementById('background').classList.add('background');
    document.getElementById('background').classList.remove('background2');
  }
});


//  AC button clearing keypad, 'lastButton' and past answers
const clickAc = (event) => {
  lastButton = "";
  inputValue.innerHTML = "";
};


// Click digit
let numberValue = "";

const clickDigit = (event) => {
  numberValue = event.target.value;
  if (lastButton == 'digit') {
    inputValue.innerHTML = inputValue.innerHTML + numberValue;
  } else if (lastButton == 'operator') {
    inputValue.innerHTML = inputValue.innerHTML + numberValue;
  } else if (lastButton == 'ac') {
    inputValue.innerHTML = inputValue.innerHTML + numberValue;
  } else if (lastButton == null) {
    inputValue.innerHTML = inputValue.innerHTML + numberValue;
  } else {
    inputValue.innerHTML = inputValue.innerHTML;
  } 
};

// Click operator
let operatorValue = "";

const clickOperator = (event) => {
  operatorValue = event.target.value;
  if (lastButton == 'digit') {
    inputValue.innerHTML = inputValue.innerHTML + operatorValue;
  } else if (lastButton == 'ans') {
    inputValue.innerHTML = inputValue.innerHTML + operatorValue;
  } else if (lastButton == 'equals') {
    inputValue.innerHTML = inputValue.innerHTML + operatorValue;
  } else {
    inputValue.innerHTML = inputValue.innerHTML;
  };
};


// Click 'equals' button
const clickEquals = () => {
  if (lastButton == 'operator') {
    null
  } else if (lastButton == 'ac') {
    null
  } else if (lastButton == 'equals') {
    null
  } else if (lastButton == '') {
    null
  } else {
    let currentArr = inputValue.innerHTML.split('<br>');
    let currentLine = currentArr[currentArr.length-1];

    const digitArr = currentLine.split(operatorValue);

    // const equation = digitArr.join(operatorValue);

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

    if (answer == Math.floor(answer)) {
      answer = answer;
    } else {
      answer = answer.toFixed(3);
    };

    if (answer === numberValue) {
      inputValue.innerHTML = answer;
    } else {
      inputValue.innerHTML = inputValue.innerHTML + "<br/>" + answer;
    }
  }
};


// Click 'ans' button
const clickAns = (event) => {
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
};


// Digit clicks
const oneClick = document
  .getElementById("one")
  .addEventListener("click", clickDigit);
const twoClick = document
  .getElementById("two")
  .addEventListener("click", clickDigit);
const threeClick = document
  .getElementById("three")
  .addEventListener("click", clickDigit);
const fourClick = document
  .getElementById("four")
  .addEventListener("click", clickDigit);
const fiveClick = document
  .getElementById("five")
  .addEventListener("click", clickDigit);
const sixClick = document
  .getElementById("six")
  .addEventListener("click", clickDigit);
const sevenClick = document
  .getElementById("seven")
  .addEventListener("click", clickDigit);
const eightClick = document
  .getElementById("eight")
  .addEventListener("click", clickDigit);
const nineClick = document
  .getElementById("nine")
  .addEventListener("click", clickDigit);
const zeroClick = document
  .getElementById("zero")
  .addEventListener("click", clickDigit);
const pointClick = document
  .getElementById("point")
  .addEventListener("click", clickDigit);


// Operator clicks
const percentClick = document
  .getElementById("percentage")
  .addEventListener("click", clickOperator);
const divideClick = document
  .getElementById("divide")
  .addEventListener("click", clickOperator);
const multiplyClick = document
  .getElementById("multiply")
  .addEventListener("click", clickOperator);
const subtractClick = document
  .getElementById("subtract")
  .addEventListener("click", clickOperator);
const addClick = document
  .getElementById("add")
  .addEventListener("click", clickOperator);


// Special clicks
const ansClick = document
  .getElementById("ans")
  .addEventListener("click", clickAns);
const acClick = document
  .getElementById("ac")
  .addEventListener("click", clickAc);
const equalClick = document
  .getElementById("equals")
  .addEventListener("click", clickEquals);


// General tracking
const buttonClick = document.getElementById("keypad");
const inputValue = document.getElementById("input__box");
