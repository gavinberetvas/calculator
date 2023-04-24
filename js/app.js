
let numbersArray = [];
let numbersArray2 = [];
let display = 0;
let operator = null;
let answer = 0;

function addToNumbersArray(number) {
  numbersArray.push(number);
  display = parseInt(numbersArray.join(""));
  document.getElementById("screen").innerHTML = `${display}`;
}

for (let i = 0; i < 10; i++) {
  document.getElementById(`button-${i}`).addEventListener("click", function () {
    addToNumbersArray(i);
  });
}

document.getElementById("equals").addEventListener("click", function () {
  math();
  test();
});


//TODO MAKE OPERATE FUNCTION WORK WHEN NUMBERS ARRAY 2 IS FILLED TO CHAIN FUNCTIONS
document.getElementById("plus").addEventListener("click", function () {
  if (operator == null) {
    operate("plus");
  } else if (operator != null) {
    
    math("plus");
    numbersArray2 = [];
    numbersArray2.push(answer);
    document.getElementById("second-screen").innerHTML = `${answer}`;
    document.getElementById("screen").innerHTML = ``;
    numbersArray = [];
  }
});

document.getElementById("minus").addEventListener("click", function () {
  operator == null ? operate("minus") : undefined;
});

document.getElementById("times").addEventListener("click", function () {
  operator == null ? operate("times") : undefined;
});

document.getElementById("div").addEventListener("click", function () {
  operator == null ? operate("div") : undefined;
});

function operate(op) {
  //if (operator != null) {

  //} else
  document.getElementById("second-screen").innerHTML = `${display}`;
  document.getElementById("screen").innerHTML = ``;
  numbersArray2 = numbersArray;
  numbersArray = [];
  operator = op;

}

function math() {
  if (numbersArray.length > 0 && numbersArray2.length > 0) {
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

function test() {
  document.getElementById("second-screen").innerHTML = ``;
  numbersArray = [];
  numbersArray2 = [];
  operator = null;
  answer = 0;
}


function blank() {
  document.getElementById("second-screen").innerHTML = ``;
  document.getElementById("screen").innerHTML = `0`;
  numbersArray = [];
  numbersArray2 = [];
  operator = 0;
}