// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// The function has two input variables:

// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// The function should return an integer, the total time required.

// There is only ONE queue, and
// The order of the queue NEVER changes, and
// Assume that the front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.


function getSum(a, b) {
  return a + b;
}

function createRegisters(n){
  var registers = [];

  for (var i = 0; i < n; i++){
    registers[i] = 0;
  }
  return registers;
}

function queueTime(customers, n) {
  let finalTime = 0;
  if (n <= 1) {
    finalTime = customers.reduce(getSum, 0);
    return finalTime;
  } else {
    const registers = createRegisters(n);
    for (var i = 0; i < customers.length; i++){
      registers[0] += customers[i];
      registers.sort(function(a, b) {
        return a - b;
      });
      console.log(registers);
    }
    finalTime = registers[registers.length-1];
    return finalTime;
  }
}


// Other solutions
// function queueTime(customers, n) {
//   var w = new Array(n).fill(0);
//   for (let t of customers) {
//     let idx = w.indexOf(Math.min(...w));
//     w[idx] += t;
//   }
//   return Math.max(...w);
// }

// Also
// function queueTime(customers, n) {
//   let tills = Array(n).fill(0);
  
//   customers.forEach((customer) => {
//     let nextTill = tills.indexOf(Math.min(...tills))
//     tills[nextTill] += customer;
//   });

//   return Math.max(...tills);
// }

// Also
// function queueTime(customers, n) {
//   if(!customers || customers.length === 0) return 0;
//   if(customers.length <= n)return Math.max.apply(null, customers);
//   var pool = Array.from({length: n}).map(v => 0),
//       i = 0, 
//       len = customers.length,
//       min;
//   for( ; i < len ;i++ ) {
//     min = Math.min.apply(null, pool);
//     pool[pool.lastIndexOf(min)] += customers[i];
//   }
//   return Math.max.apply(null, pool);
// }


