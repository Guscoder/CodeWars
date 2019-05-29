/* Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as * */

function towerBuilder(nFloors) {
    let tower = [];
    // build here
    for(let i = 0; i < nFloors ; i++){
        tower.push(" ".repeat(nFloors - i - 1)
            + "*".repeat((i * 2)+ 1)
            + " ".repeat(nFloors - i - 1));
    }
    return tower;
  }

towerBuilder(5);