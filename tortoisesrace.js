// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (don't worry for fractions of second).


// translate speed into ft/sec
// difference in feet per sec
// lead / difference in speed/sec

function race(v1, v2, g) {
  if (v2 < v1) { return null; }
  
  var seconds = Math.floor(g / (v2 - v1) * 3600);
  var h = Math.floor(seconds / 3600);
  var m = Math.floor((seconds - h * 3600) / 60);
  var s = seconds - h * 3600 - m * 60;
  
  return [h, m, s];
}

race(720, 850, 70);



// function race(v1, v2, g){
//   let time=g/(v2-v1);
//   return v2>v1 ? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
// }