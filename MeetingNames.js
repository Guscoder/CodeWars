// input string of names
// first and last name sep by :
// diff names sep by ;
// make all names uppercase
// sort string by last name
// if same last name, sort by first name
// output name in batween (), sep by comma

function meeting(s) {

    return s.toUpperCase().split(';').map((str) => {
      return str.split(':').reverse();
    }).sort().map((arr) => {
      return "(" + arr.join(', ') + ")";
    }).join('');

}
meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill");