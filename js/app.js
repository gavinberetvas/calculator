//document.getElementById("screen").innerHTML = `${display}`;

let numbersArray = [];
let numbersArray2 = [];
let display = 0;
let operator = 0;

function addToNumbersArray(number) {
  numbersArray.push(number);
  display = parseInt(numbersArray.join(""));
  document.getElementById("screen").innerHTML = `${display}`;
}

document.getElementById("equals").addEventListener("click", function () {
  equals();
});

document.getElementById("button-0").addEventListener("click", function () {
    addToNumbersArray(0);
  });

document.getElementById("button-1").addEventListener("click", function () {
  addToNumbersArray(1);
});

document.getElementById("button-2").addEventListener("click", function () {
  addToNumbersArray(2);
});

document.getElementById("button-3").addEventListener("click", function () {
    addToNumbersArray(3);
  });
  
  document.getElementById("button-4").addEventListener("click", function () {
    addToNumbersArray(4);
  });

  document.getElementById("button-5").addEventListener("click", function () {
    addToNumbersArray(5);
  });
  
  document.getElementById("button-6").addEventListener("click", function () {
    addToNumbersArray(6);
  });
  
  document.getElementById("button-7").addEventListener("click", function () {
      addToNumbersArray(7);
    });
    
    document.getElementById("button-8").addEventListener("click", function () {
      addToNumbersArray(8);
    });

    document.getElementById("button-9").addEventListener("click", function () {
        addToNumbersArray(9);
      });
    
  

document.getElementById("plus").addEventListener("click", function () {
    operator == 0 ? operate("plus") : undefined;
});

document.getElementById("minus").addEventListener("click", function () {
    operator == 0 ? operate("minus") : undefined;
});

document.getElementById("times").addEventListener("click", function () {
    operator == 0 ? operate("times") : undefined;
});

document.getElementById("div").addEventListener("click", function () {
    operator == 0 ? operate("div") : undefined;
});



function operate(op) {
  document.getElementById("second-screen").innerHTML = `${display}`;
  document.getElementById("screen").innerHTML = ``;
  numbersArray2 = numbersArray;
  numbersArray = [];
  operator = op;
}

function equals() {
    if (numbersArray.length > 0 && numbersArray2.length > 0) {
      switch (operator) {
        case "plus":
          document.getElementById("screen").innerHTML =
            (parseInt(numbersArray.join("")) + parseInt(numbersArray2.join(""))).toFixed(4);
          break;
        case "minus":
          document.getElementById("screen").innerHTML =
            (parseInt(numbersArray2.join("")) - parseInt(numbersArray.join(""))).toFixed(4);
          break;
        case "times":
          document.getElementById("screen").innerHTML =
            (parseInt(numbersArray2.join("")) * parseInt(numbersArray.join(""))).toFixed(4);
          break;
        case "div":
          document.getElementById("screen").innerHTML =
            (parseInt(numbersArray2.join("")) / parseInt(numbersArray.join(""))).toFixed(4);
          break;
      }
  
      document.getElementById("second-screen").innerHTML = ``;
      numbersArray = [];
      numbersArray2 = [];
      operator = 0;
    } else {
      return 1;
    }
  }

const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const multiply = function (array) {
  if (array.length === 0) {
    return 0;
  }
  let sum = 1;
  for (i = 0; i < array.length; i++) {
    sum *= array[i];
  }
  return sum;
};

const divide = function (x, y) {
  return x / y;
};

const sum = function (array) {
  if (array.length === 0) {
    return 0;
  }
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  let sum = 1;
  for (i = x; i > 1; i--) {
    sum *= i;
  }
  return sum;
};
