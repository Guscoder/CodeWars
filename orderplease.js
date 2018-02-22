// Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

// create array with each word in string as an item
// review each word to see what number is in it
// sort words by ascending number
// rejoin words into one string


function order(words){
  // ...
  let wordArray = [];
  let sortedArray = [];

  wordArray = words.split(' ');
	console.log(wordArray);
	
	let splitWords = wordArray.map(function(item) {
		return item.split('');
	})

	console.log(splitWords);

  for (var i = 0; i < splitWords.length; i++) {
  	for (var j = 0; j < splitWords[i].length; j++) {
  		switch (parseFloat(splitWords[i][j])) {
  			case 1:
  			case 2:
  			case 3:
  			case 4:
  			case 5:
  			case 6:
  			case 7:
  			case 8:
  			case 9:
  			case 0:
  				console.log(parseFloat(splitWords[i][j]));
  				sortedArray[(splitWords[i][j]) - 1] = splitWords[i];
  				break;
  		}
  	}
  }
  let finalArray = sortedArray.map(function(item) {
  	return item.join('');
  });

  return finalArray.join(' ');
}

order("");




// Top solution
// function order(words){
  
//   return words.split(' ').sort(function(a, b){
//       return a.match(/\d/) - b.match(/\d/);
//    }).join(' ');
// }    



// Another solution

// var reg = /\d/;

// function order(words){
//   return words.split(' ').sort(comparator).join(' ');
// }

// function comparator(word, nextWord) {
//   return +word.match(reg) - +nextWord.match(reg)
// }
