/* 
My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

"dolphin" -> "The Dolphin"

However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

"alaska" -> "Alaskalaska"

Complete the function that takes a noun as a string, and returns her preferred band name written as a string.
 */

// does word have teh same letter at the start and end of it?
// If not, capitalize word and add The to beginning
// If yes, take off ending letter and repeat full word again
// Output band name

function bandNameGenerator(str) {
    let bandName = '';
    if (str.charAt(0) === str.charAt(str.length -1)) {
        bandName = str.slice(0, -1);
        bandName += str;
        return bandName.charAt(0).toUpperCase() + bandName.slice(1);
    } else {
        bandName = 'The ' + (str.charAt(0).toUpperCase() + str.slice(1));
        console.log(bandName);
        return bandName;
    }
}