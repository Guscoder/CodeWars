// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


//Separate digits
// square each digit
// join squared numbers together into one number

function squareDigits(num){
  
    let digits = num.toString().split('');
    let realDigits = digits.map(Number);
    return Number(realDigits.map(x => x**2).join(''));
}

squareDigits(num);


/* function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  } */