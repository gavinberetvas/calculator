let numbersArray = [];
let numbersArray2 = [];
let display = 0;
let operator = null;
let answer = 0;
let reset = null;

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
  equals();
  //alert(`${reset}`);
});


document.getElementById("plus").addEventListener("click", function () {
  if (operator == null) {
    operate("plus");
  } 
  else if ((operator != null & reset != null)){ 
    math(operator);
    operator = "plus";
    numbersArray2 = [];
    numbersArray2.push(reset);
    document.getElementById("second-screen").innerHTML = `${reset}`;
    document.getElementById("screen").innerHTML = ``;
    numbersArray = [];
  }
  else if (operator != null) {
    math(operator);
    operator = "plus";
    numbersArray2 = [];
    numbersArray2.push(answer);
    document.getElementById("second-screen").innerHTML = `${answer}`;
    document.getElementById("screen").innerHTML = ``;
    numbersArray = [];
  } 
});

document.getElementById("minus").addEventListener("click", function () {
  if (operator == null) {
    operate("minus");
  } else if ((operator != null & reset != null)){ 
    math(operator);
    operator = "minus";
    numbersArray2 = [];
    numbersArray2.push(reset);
    document.getElementById("second-screen").innerHTML = `${reset}`;
    document.getElementById("screen").innerHTML = ``;
    numbersArray = [];
  }
  else if (operator != null) {
    math(operator);
    operator = "minus";
    numbersArray2 = [];
    numbersArray2.push(answer);
    document.getElementById("second-screen").innerHTML = `${answer}`;
    document.getElementById("screen").innerHTML = ``;
    numbersArray = [];
  }
});

document.getElementById("times").addEventListener("click", function () {
  if (operator == null) {
    operate("times");
  } else if ((operator != null & reset != null)){ 
    math(operator);
    operator = "times";
    numbersArray2 = [];
    numbersArray2.push(reset);
    document.getElementById("second-screen").innerHTML = `${reset}`;
    document.getElementById("screen").innerHTML = ``;
    numbersArray = [];
  } 
  else if (operator != null) {
    math(times);
    operator = "times";
    numbersArray2 = [];
    numbersArray2.push(answer);
    document.getElementById("second-screen").innerHTML = `${answer}`;
    document.getElementById("screen").innerHTML = ``;
    numbersArray = [];
  }
});

document.getElementById("div").addEventListener("click", function () {
  if (operator == null) {
    operate("div");
  } else if ((operator != null & reset != null)){ 
    math(operator);
    operator = "div";
    numbersArray2 = [];
    numbersArray2.push(reset);
    document.getElementById("second-screen").innerHTML = `${reset}`;
    document.getElementById("screen").innerHTML = ``;
    numbersArray = [];
  } 
  else if (operator != null) {
    math(div);
    operator = "div";
    numbersArray2 = [];
    numbersArray2.push(answer);
    document.getElementById("second-screen").innerHTML = `${answer}`;
    document.getElementById("screen").innerHTML = ``;
    numbersArray = [];
  }
});

function operate(op) {
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

function equals() {
  document.getElementById("second-screen").innerHTML = ``;
  numbersArray = [];
  numbersArray2 = [];
  operator = 0;
  reset = answer;
  answer = 0;
}

function blank() {
  document.getElementById("second-screen").innerHTML = ``;
  document.getElementById("screen").innerHTML = `0`;
  numbersArray = [];
  numbersArray2 = [];
  operator = 0;
}

function negate() {
    if (reset != null) {
      reset = reset - reset * 2
      document.getElementById("screen").innerHTML = `${reset}`;
    } else {
      answer = answer - answer * 2
      document.getElementById("screen").innerHTML = `${answer}`;
    }
  }
