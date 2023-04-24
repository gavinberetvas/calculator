//document.getElementById("screen").innerHTML = `${display}`;

let numbersArray = [];
let numbersArray2 = [];
let display = 0;
let num1 = '';
num2 = '';
let operator = 0;
let answer = 0;


function addToScreen(number) {
  numbersArray.push(number);
  display = parseInt(numbersArray.join(""));
  document.getElementById("screen").innerHTML = `${display}`;
}

document.getElementById("equals").addEventListener("click", function () {
  math(operator);
  equals();
});

for (let i = 0; i < 10; i++) {
  document.getElementById(`button-${i}`).addEventListener("click", function () {
    addToScreen(i);
  });
}
//ABOVE THIS WORKS GOOD//

//TODO MAKE OPERATE FUNCTION WORK WHEN NUMBERS ARRAY 2 IS FILLED TO CHAIN FUNCTIONS
document.getElementById("plus").addEventListener("click", function () {
  if (numbersArray2 == []){
  numbersArray2 = numbersArray
  numbersArray = []
  document.getElementById("second-screen").innerHTML = parseInt(numbersArray2.join(""));
  document.getElementById("screen").innerHTML = "";
  } else {
    math();
  }
});
////

document.getElementById("minus").addEventListener("click", function () {
  operator == 0 ? operate("minus") : undefined;
});

document.getElementById("times").addEventListener("click", function () {
  operator == 0 ? operate("times") : undefined;
});

document.getElementById("div").addEventListener("click", function () {
  operator == 0 ? operate("div") : undefined;
});


function math(operator) {
  if (num1 > 0 && num2 > 0) {
    let num1 = parseInt(numbersArray.join(""));
    let num2 = parseInt(numbersArray2.join(""));
    switch (operator) {
      case "plus":
        answer = num1 + num2;
        break;
      case "minus":
        answer = num2 - num1;
        break;

      case "times":
        answer = num1 * num2;
        break;
      case "div":
        answer = num2 / num1;
        break;
    }
    document.getElementById("screen").innerHTML = answer.toFixed(2);
  } else {
    blank();
  }
}

function equals() {
  document.getElementById("second-screen").innerHTML = ``;
  numbersArray = [];
  numbersArray2 = [];
  operator = 0;
  answer = 0;
}

function blank() {
  document.getElementById("second-screen").innerHTML = ``;
  document.getElementById("screen").innerHTML = `0`;
  numbersArray = [];
  numbersArray2 = [];
  operator = 0;
}
