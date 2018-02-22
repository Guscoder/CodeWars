// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, function should returns 0

// determine if begin is greater than end, if so return 0
// determine if begin is the same as and, if so return begin
// what is the step--save as variable
// begin + (begin+step) etc...up to and including end


let sequenceSum = (begin, end, step) => {
	let totalSum = begin;
	let nextNum = (begin + step)
  if (begin > end) {
  	return 0;
  } else if (begin === end) {
  	return begin;
  } else {
  		while (nextNum <= end){
  			totalSum += nextNum;
  			nextNum += step;
  		}
  }
  return totalSum;
};

sequenceSum(1,5,1);

// Best practices:

// const sequenceSum = (begin, end, step) => {
//   if (begin > end) {
//     return 0;
//   }
//   return begin + sequenceSum(begin + step, end, step);
// };

// const sequenceSum = (begin, end, step) => {
//   var sum = 0;
//   for(var i=begin;i<=end;i+=step)
//   {
//     sum += i;
//   }
//   return sum;
// };