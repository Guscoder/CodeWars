/* 
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

 */

// convert number list into array
// loop through array to count how many are even or odd
// save # of odd, # of even to variables
// var = 1 is what we want to output

function iqTest(numbers){
    const numArray =  numbers.split(" ").map(Number);

    let evenNums = 0;
    let oddNums = 0;
    let iqIndex = 0;

    numArray.forEach(num => {
        if(num % 2 === 0) {
            evenNums += 1;
        } else {
            oddNums += 1
        }
    });

    if(evenNums === 1) {
        iqIndex = numArray.findIndex(num => (num % 2) === 0);
    } else {
        iqIndex = numArray.findIndex(num => (num % 2) !== 0);
        console.log(iqIndex);
    }

    return iqIndex + 1;
}

/* 
function iqTest(numbers){
    numbers = numbers.split(" ").map(function(el){return parseInt(el)});
    
    var odd = numbers.filter(function(el){ return el % 2 === 1});
    var even = numbers.filter(function(el){ return el % 2 === 0});
    
    return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
  }
 */
