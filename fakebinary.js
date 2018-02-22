// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Take input of a string
// Convert to array of numbers
// Iterate through array, test if each number is above or below 5
// Replace number with 0 or 1
// return new array, convert array to string


function fakeBin(numString){
	let numArray = numString.split('');
	let result = '';

	for (var i = 0; i < numArray.length; i++){
		if (numArray[i] < 5) {
			result += 0;
		} else {
			result += 1;
		}
	}
	return result;
}

fakeBin("12456");

function fakeBin(numString){
	return numString.split('').map(n => n < 5 ? 0 : 1).join('');
}


fakeBin("12456");

function fakeBin(numString){
	let numArray = numString.split('');
	return numArray.map(function(item){
		if (item < 5) {
			return item = 0;
		} else {
			return item = 1;
		}
	}).join('');
}

fakeBin("12456");