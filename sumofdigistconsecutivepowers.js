// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

function sumDigPow(a, b) {
  var arr = [];
  for (var i = a; i <= b; i++) { // loop through the numbers starting with a up to b increment by 1

    var sum = 0; // figure the sum

    for (var j = 0; j <= String(i).length; j++) { // loop through the digits of each number but change the num to a string first so it loops up to the nmber of times equal to the number of digits

      sum += Math.pow(parseInt(String(i)[j]), j+1); // mutiply digit by exponent depending on which digit it is and then increase the exponent by 1 for the next digit if there is one and add the resulting number to the current sum

      if (sum == i) arr.push(i); //if the new sum equals original number add to the new array
    }
  }
  return arr; // return new array with numbers that meet criteria
}

// alternative solution

function sumDigPow(a, b) {
  var ans = [];
  while(a <= b){
    if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
      ans.push(a);
    a++;
  }
  return ans;
}

// create array of numbers between a - b
// check each number for how many digits it has
// sum each digit to the power
// compare sum to original number
// output number sum if equal to original number to new array
// return new arra of numbers that fit criteria