// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number following the sequence:

// 0 1 3 6 10 15 21 28 36 45 55 ....

// which is created by

// 0, 0+1, 0+1+2, 0+1+2+3, 0+1+2+3+4, 0+1+2+3+4+5, 0+1+2+3+4+5+6, 0+1+2+3+4+5+6+7 etc..

// Input:

// LastNumber

// Output:

// series and result



var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {

      let final = '0';
      for  (let i = 1; i <= count; i++) {
        final = `${final}+${i}`;
        console.log(final);
      }
      let numArray = final.split('+').map(x => parseInt(x));
      let finalTotal = numArray.reduce(function (a, b) {
        return a + b;
      }, 0);
      return `${final}=${finalTotal}`;
    };
    return SequenceSum;
  })();

SequenceSum.showSequence(-2);

// Best practice:

// var SequenceSum = (function() {
//   function SequenceSum() {}

//   SequenceSum.showSequence = function(count) {
//     var sum = 0;
//     var str = "";
//     if (count === 0) {
//       return "0=0";
//     } else if (count < 0) {
//       return count + "<0";
//     } else {
//       for (var i = 0; i < count; i++) {
//         sum += i;
//         str += i + "+";
//       };
//     sum += count;
//     str += count + " = " + sum;
//     return str;
//     };
//   };

//   return SequenceSum;

// })();