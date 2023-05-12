# calculator
Odin Project Foundations Final Assignment

on clicking first number
    update screen
    add item to array [num1, operator, num2]

on clicking operator
    update screen
    add operator to array [num1, operator, num2]

on clicking third number 
    update screen
    add operator to array [num1, operator, num2]

on clicking equals
    evaluate array
    display on screen


on clicking operator: 
    if number in array, record value, and empty number array

on clicking equal sign:

    if number array 1, operator, and 2 have values, evaluate.

    else problem


    for (let i = 1; i <= 4; i++) {
  document.getElementById(`button-${i}`).addEventListener("click", function () {
    addToNumbersArray(i);
  });
}


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