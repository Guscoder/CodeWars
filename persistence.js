



/* 
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

check if number is already a single digit
split number into single digits
multiply digits, keep track of multplication tries in a variable
check if total is one digit or more than one
if more than one, split digits and mutiply again, recheck
if only one digit, output number of times it took to multiply to get to one digit
 */

function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 }