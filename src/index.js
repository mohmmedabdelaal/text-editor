import '../assets/css/style.css';

//// Exercise
/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
const text = document.getElementById('text-input');
const boldBtn = document.querySelector('#bold');
const italicBtn = document.querySelector('#italic');
const leftAlign = document.querySelector('#left-align');
const rightAlign = document.querySelector('#right-align');
const centerAlign = document.querySelector('#center-align');
const underlineBtn = document.querySelector('#underline');
let output = document.getElementById('text-output');

text.addEventListener('input', () => (output.textContent = text.value));

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
boldBtn.addEventListener('click', (elem) => {
  //CODE GOES HERE
  output.classList.toggle('active');
  output.classList.toggle('bold');
});

/**
 * Toggle the italic class for the output text
 */
italicBtn.addEventListener('click', (elem) => {
  //CODE GOES HERE
  output.classList.toggle('active');
  output.classList.toggle('italic');
});

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
underlineBtn.addEventListener('click', (el) => {
  //CODE GOES HERE
  underlineBtn.classList.toggle('active');
  output.classList.toggle('underline');
});

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */

const alignButtons = (el, alignType) => {
  //CODE GOES HERE
  output.style.textAlign = alignType;
  let alignButtons = document.getElementsByClassName('align');
  for (const elm of alignButtons) {
    elm.classList.remove('active');
  }
  el.classList.toggle('active');
};

centerAlign.addEventListener('click', function () {
  alignButtons(this, 'center');
});

rightAlign.addEventListener('click', function () {
  alignButtons(this, 'right');
});

leftAlign.addEventListener('click', function () {
  alignButtons(this, 'left');
});
/////////////////////

// const createStr = (str) => {
//   let strArray = str.split(' ');
//   let strArrayLength = strArray.length;
//   return strArrayLength;
// };

// console.log(createStr('mohamed'));
