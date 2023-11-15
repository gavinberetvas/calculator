let displayValue = "";
let previousValue = "";
let operator = null;
let reset = false;

for (let i = 0; i < 10; i++) {
  document.getElementById(`button-${i}`).addEventListener("click", function () {
    addPresentValueToDisplay(`${i}`);
  });
}

document.getElementById("negate").addEventListener("click", function () {
  negate();
});

document.getElementById("percent").addEventListener("click", function () {
  displayValue = displayValue / 100;
  document.getElementById("screen").innerHTML = displayValue;
});

document.getElementById("decimal").addEventListener("click", function () {
  if (displayValue.indexOf(".") === -1) {
    addPresentValueToDisplay(".");
  }
});

document.getElementById("delete").addEventListener("click", function () {
  displayValue = displayValue.toString().slice(0, -1);
  document.getElementById("screen").innerHTML = displayValue;
});

document.getElementById("clear").addEventListener("click", function () {
  reset = true;
  resetFunction();
  reset = false;
});

document.getElementById("equals").addEventListener("click", function () {
  resetFunction();
  if (displayValue != "" && previousValue != "") {
    math();
    reset = false;
  }
});

["plus", "minus", "div", "times"].forEach(function (operator) {
  document.getElementById(operator).addEventListener("click", function () {
    setOperator(operator);
  });
});

function math() {
  displayValue = parseFloat(displayValue);
  previousValue = parseFloat(previousValue);
  switch (operator) {
    case "plus":
      displayValue = displayValue + previousValue;
      break;
    case "minus":
      displayValue = previousValue - displayValue;
      break;
    case "times":
      displayValue = previousValue * displayValue;
      break;
    case "div":
      displayValue = previousValue / displayValue;
      break;
  }
  if (displayValue % 1 != 0) {
    displayValue = Math.round(displayValue * 100) / 100;
  } else {
    displayValue = displayValue;
  }
  previousValue = "";
  document.getElementById("screen").innerHTML = displayValue;
  document.getElementById("second-screen").innerHTML = previousValue;
}

function addPresentValueToDisplay(i) {
  displayValue += i;
  document.getElementById("screen").innerHTML = displayValue;
}

function resetFunction() {
  if (reset) {
    displayValue = "";
    previousValue = "";
    document.getElementById("screen").innerHTML = "";
    document.getElementById("second-screen").innerHTML = "";
    operator = null;
    reset = false;
  } else {
    reset = true;
  }
}

function negate() {
  if (displayValue != "") {
    displayValue = parseFloat(displayValue);
    displayValue = displayValue - displayValue * 2;
    document.getElementById("screen").innerHTML = displayValue;
  }
}

function setOperator(op) {
  reset = false;
  if (displayValue != "" && previousValue != "") {
    math();
    operator = op;
  }
  operator = op;
  previousValue = displayValue;
  document.getElementById("second-screen").innerHTML = previousValue;
  displayValue = "";
  document.getElementById("screen").innerHTML = displayValue;
}
