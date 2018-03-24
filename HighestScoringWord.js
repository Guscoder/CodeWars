// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// split string into separate words
// iterate through each word and assign each letter a value
// add the values of each word
// determine which word is highest sum and return that word


function high(x){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let strArray = x.split(' '); 
  let wordSums = {};
  let sortable = [];

  strArray.forEach(function(word){
    let sum = 0;
    word.split('').forEach(function(letter){
      sum += alphabet.indexOf(letter) + 1; 
    })
    wordSums[word] = sum;
  })

  for (let word in wordSums) {
    sortable.push([word, wordSums[word]]);
  }

  sortable.sort(function(a, b) {
    return b[1] - a[1];
  });
  console.log(sortable);
  return sortable[0][0];  
}

high('cows beans jam');


// function high(x){
//   //transform the input string into array & define a string of alphabetical latin characters
//   var arr = x.split(' ');
//   var str = 'abcdefghijklmnopqrstuvwxyz';
//   //Iterate through the array with input words to find the one with the greatest sum
//   var newArr = arr.map(function(word){
//     var sum = 0;
//     for (var i = 0; i < word.length; i++) {
//       sum += str.indexOf(word[i]);
//     }
//     return sum;
//   });
//   //Return the word with the greatest sum
//   return arr[newArr.indexOf(Math.max(...newArr))];
// }




