// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let smallestMissingNum = 1;

    // Sort array
    A.sort(function(a,b){
        return a - b
    });
    console.log(A);
    //loop through array to find first missing number
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] > -1 && A[i] == smallestMissingNum) {
                smallestMissingNum++;
        }
    }
    //output missing number if greater than 0

    return smallestMissingNum;

 

}

solution([3,5,1,9,2,6,10]);