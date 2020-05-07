"use strict"

function getPlanetName(id){
    var name;
    switch( id ){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
      default:
        name = 'Reikia skaiciaus nuo 1 iki 8'  
    }
    
    return name;
  }


  console.log( getPlanetName(2));
  console.log( getPlanetName(3));
  console.log( getPlanetName(4));
  console.log( getPlanetName(5));
  console.log( getPlanetName(-3));
  console.log( getPlanetName(16));


  let state = ``;
  function check( a, x ) {
    for ( let i=0;  i<=a.length; i++ )  {
      if (a[i] === x) {
        state = true;
        console.log(a[i]);
        console.log(x);
        break;
        }
        else {state = false;};
     };
    return state;
  };
  
  
  console.log( check([66, 101], 66), state);
  console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), state);
  console.log(check(['t', 'e', 's', 't'], 'e'), state);
  console.log(check(['what', 'a', 'great', 'kata'], 'kat'), state);
    