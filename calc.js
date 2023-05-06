/*
 * Implement all your JavaScript in this file!

.on('click', function() {
  
});

 */

//References to buttons and display elements
var display = $('#display');
var buttons = $('button');
var clearButton = $('#clearButton');
var addButton = $('#addButton');
var subtractButton = $('#subtractButton');
var multiplyButton = $('#multiplyButton');
var divideButton = $('#divideButton');
var equalsButton = $('#equalsButton');

//Current value & Second value of calculator
var currentValue = 0;
var secondValue = null;

//Variable to check if second is just inputed
var first = false;

//Bool to check if operator was selected
var addClick, subtractClick, multiplyClick, divideClick = false;

//Clear button
clearButton.on('click', function() {
  currentValue = 0;
  secondValue = null;
  first = false;
  //Reset all data
  addClick = false;
  subtractClick = false;
  multiplyClick = false;
  divideClick = false;
  display.val('');
});

//Add button
addButton.on('click', function() {
  addClick = true;
  first = true;
  //Reset rest of operators
  subtractClick = false;
  multiplyClick = false;
  divideClick = false;
});

//Subtract button
subtractButton.on('click', function() {
  subtractClick = true;
  first = true;
  //Reset rest of operators
  addClick = false;
  multiplyClick = false;
  divideClick = false;
});

//Multiply button
multiplyButton.on('click', function() {
  multiplyClick = true;
  first = true;
  //Reset rest of operators
  addClick = false;
  subtractClick = false;
  divideClick = false;
});

//Divide button
divideButton.on('click', function() {
  divideClick = true;
  first = true;
  //Reset rest of operators
  addClick = false;
  subtractClick = false;
  multiplyClick = false;
});

//Equals button
equalsButton.on('click', function() {
  //Must have an operator selected AND must also have a second value
  if (addClick === true || subtractClick === true || multiplyClick === true || divideClick === true || secondValue != null) {
    var result = 0;
    if (addClick) {
      result = parseFloat(currentValue) + parseFloat(secondValue);
    } else if (subtractClick) {
      result = parseFloat(currentValue) - parseFloat(secondValue);
    } else if (multiplyClick) {
      result = parseFloat(currentValue) * parseFloat(secondValue);
    } else if (divideClick) {
      result = parseFloat(currentValue) / parseFloat(secondValue);
    }
    //Reset all data
    addClick = false;
    subtractClick = false;
    multiplyClick = false;
    divideClick = false;
  
    currentValue = 0;
    secondValue = null;
    //Display result
    display.val(result);
  } else {
    //Ignore All
  }
  
});


//Buttons for numbers
buttons.on('click', function() {
  var value = $(this).val();
    //Second value
    if (addClick === true || subtractClick === true || multiplyClick === true || divideClick === true) {
      if (first) {
        display.val(value);
        first = false;
      } else {
        //Another number
        display.val(display.val() + value);
      }
      secondValue = display.val();
    } else {
      if (value === 0) {
        display.val(value);
      } else {
        //Another number
        display.val(display.val() + value);
      }
      //First value
      currentValue = display.val();
    }
});