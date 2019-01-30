/* 
You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.
 */


// Getlength of string
// if length is 6 or more, mouse escapes, output string
// if length is 5 or less, mouse is caught, output string 

function catMouse(catString){
    catString.length > 5 ? 'Escaped!' : 'Caught!';
}