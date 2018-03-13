// Your task is to write function toLeetSpeak that converts a regular english sentence to Leetspeak.

// More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

// Consider only uppercase letters (no lowercase letters, no numbers) and spaces.


// make leet alphabet an object
// split string into array split()
// iterate through array with map
// if letter matches key in translation, change letter to that value
// rejoin array and output new string


var translation = { A : '@',  B : '8',  C : '(',  E : '3', G : '6', H : '#',  I : '!',  L : '1',  O : '0',  S : '$',  T : '7',  Z : '2'
}

function toLeetSpeak(str) {
  return str.split('').map( c => translation[c] || c).join('');
}

toLeetSpeak("LEET");

