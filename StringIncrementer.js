

// NOT COMPLETED!!!


// Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// does string end in a number?
// check chars to see if any is a number
// if it does NOT end in a numner, add 1 to the end of it
// if it does end in a number, add 1 to the number and output the new number at the end of the string
// 
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function incrementString (strng) {
  let stringNum = '';
  let newStr = '';
  for (let i = 0; i < strng.length; i++) {
    if (isNumeric(strng[i])){
      stringNum = `${stringNum}${strng[i]}`;
    } else {
      newStr = `${newStr}${strng[i]}`;
    }
  }
  let finalChar = (parseInt((stringNum[stringNum.length-1])) + 1);
  let stringNumFinal = stringNum.slice(0, -1) + finalChar;
  return newStr + stringNumFinal;
}

incrementString('hi000586');