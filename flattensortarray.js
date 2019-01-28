/* Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order. */

let myArr = [[1,4,3], [6,7,5], [9,8,10]];

function flatSort(arr) {
    return [].concat(...arr).sort((a,b) => {return a-b});
};

flatSort(myArr);