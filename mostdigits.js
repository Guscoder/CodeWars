// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// convert numbers to strings
// determine length of each string
// compare length of each string
// if two match length return first one
// return longest string


function findLongest(array){
  var newArr = array.map(function(element) {
    return element.toString();
  });
  newArr.sort(function(a,b) {
    return b.length - a.length;
  });
    return parseInt(newArr[0]);
  }
}

findLongest([1, 10, 100, 200, 300]);

// const findLongest = l => l
//   .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);


// function findLongest(array){
//   return array.reduce((res, curr) => (String(res).length < String(curr).length) ? curr : res);
// }