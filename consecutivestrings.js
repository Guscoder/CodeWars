// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.



function longestConsec(strarr, k) {
    var longest = "";
    // loop through array
    for(var i=0;k>0 && i<=strarr.length-k;i++){
        // slice consecutive words from i to i+k
      var tempArray = strarr.slice(i,i+k);
      // join consecutive words together in one string
      var tempStr = tempArray.join("");
      // check if the new string is longer then the previously stored string
      // if so then replace previous string with new, longer string
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2);