function tickets(peopleInLine){
  let cashOnHand = 0;

  //if first person does not have 25, output no

  if (peopleInLine[0] > 25) {
    return "NO";
  } else {
      peopleInLine.forEach(function(person){
        if (cashOnHand < (person - 25)) {
          break;
        } else {
          cashOnHand = ((cashOnHand + 25) - (person - 25));
          console.log(cashOnHand);
        }
    });
    return (cashOnHand >= 0 ? "YES" : "NO");
  }
}

tickets([25,50,25,100,25,25,25,100,25,50,25,100,25,100,50]);





function Clerk(name) {
  this.name = name;
  
  this.money = {
    25 : 0,
    50 : 0,
    100: 0 
  };
  
  this.sell = function(element, index, array) {
    this.money[element]++;

    switch (element) {
      case 25:
        return true;
      case 50:
        this.money[25]--;
        break;
      case 100:
        this.money[50] ? this.money[50]-- : this.money[25] -= 2;
        this.money[25]--;
        break;
    }
    return this.money[25] >= 0;
  };
}

function tickets(peopleInLine){
  var vasya = new Clerk("Vasya");
  return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
}





function tickets(peopleInLine) {
  var bills = [0, 0, 0]
  for (var i = 0; i < peopleInLine.length; i++) {
    switch (peopleInLine[i]) {
      case 25:
        bills[0]++
        break
        
      case 50:
        bills[0]--
        bills[1]++
        break
        
      case 100:
        bills[1] ? bills[1]-- : bills[0] -= 2
        bills[0]--
        break
    }
    
    if (bills[0] < 0) {
      return 'NO'
    }
  }
  
  return 'YES'
}




function tickets(peopleInLine){
  var bills = [100, 50, 25], canSell = "YES", bank = {"100": 0, "50": 0, "25": 0}, change;
  peopleInLine.forEach(function(person){
    bank[person]++;
    change = person - 25;
    bills.forEach(function(bill){
      while (bank[bill] && change > 0 && change >= bill) {
        change = change - bill;
        bank[bill]--;
      }
    });
    if (change > 0) canSell = "NO";
  });
  return canSell;
}