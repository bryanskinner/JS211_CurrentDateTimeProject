// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

function convertNumToString(num) {

let num = 42;
let str = num.toString();

  // return num.toString()
}

console.log(typeof str);



// Write a JavaScript program to convert a string to the number.
const stringToNum = (string) => Number(string)


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  function checkType(value) {
    return typeof value;
  }
console.log(checkType(2))
console.log(checkType('hi'))


  
// Write a JavaScript program that adds 2 numbers together.
function add(num1, num2) {
  return num1 + num2;
}



// Write a JavaScript program that runs only when 2 things are true.
function bothThingsAreTrue (thing1, thing2) {
  if(thing1 && thing2) {
    return "they are both true"
  }
}

console.log(bothThingsAreTrue(true,true))





// Write a JavaScript program that runs when 1 of 2 things are true.

function oneThingsAreTrue (thing1, thing2) {
  if(thing1 || thing2) {
    return "they are both true"
  }
}


// Write a JavaScript program that runs when both things are not true.  

function noThingsAreTrue (thing1, thing2) {
  if(thing1 === false && thing2 === false )
  return "they are not true"
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
