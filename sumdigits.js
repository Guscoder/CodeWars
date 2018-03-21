// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. Let's assume that all numbers in the input will be integer values.

// split number into separate digits or chars
// remove non-digit chars
// add digits together
// output total

function sumDigits(number) {
  return number.toString().split('').filter(x => x >= 0).map(x => parseInt(x)).reduce((acc, cv) => acc + cv);
}

sumDigits(-45.6);