// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are apart of the word in this kata.

function reverse(str) {
    let newStr = str.split(' ');



    let reversedStr = newStr.map(word => {
        if ((newStr.indexOf(word) % 2) !== 0) {
            let newWord = word.split('').reverse();
            return newWord.join('');
        } else {
            return word;
        }

    })
    return reversedStr.join(' ').trim();
}

reverse();