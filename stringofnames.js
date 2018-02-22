// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.


function list(names){
  // iterate through the objects passed and collect the name values to construct a string 
  var str = "";
  
  // if only one object is passed then return the name value
  if(names.length === 1) { return str += names[0].name; }
 
  
  // if only two objects are passed then concatenate the name values
  if(names.length === 2) {
  str = str + names[0].name + " & " + names[1].name;
  return str;
  }
  
  for(var x = 0; x < names.length; x++) {
  // if it's the last object in the index then append the ampersand 
    if( x === names.length - 1) { str = str + " & " + names[x].name; } 
    else if ( x === 0 ) { str = str + names[x].name; } 
    else { str = str + ", " + names[x].name; }
  }
  
  return str;
  
}

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])



// function list(names){
//   return names.reduce(function(prev, current, index, array){
//     if (index === 0){
//       return current.name;
//     }
//     else if (index === array.length - 1){
//       return prev + ' & ' + current.name;
//     } 
//     else {
//       return prev + ', ' + current.name;
//     }
//   }, '');
//  }



// function list(names) {
//   var xs = names.map(p => p.name)
//   var x = xs.pop()
//   return xs.length ? xs.join(", ") + " & " + x : x || ""
// }
