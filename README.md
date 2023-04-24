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
