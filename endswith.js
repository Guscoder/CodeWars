function solution(str, ending){
    // how many chars in ending
    // splice that number from str
    //compare spliced chars with ending chars
    const numOfChars = ending.length;
    const strEnding = str.split('').slice(-numOfChars).join('');
    return ending === strEnding ? true : false;
  }

  function solution(str, ending){
    return str.endsWith(ending);
  }