// Complete the solution so that it reverses all of the words within the string passed in.


function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}


// function reverseWords(str){
//     let newArray = str.split(' ');
//     let reversedArray = [];

//     for(let i = newArray.length - 1; i >= 0; i--) {
//       reversedArray.push(newArray[i]);
//     }
//     return reversedArray.join(' ');
//  }


reverseWords('I am King');