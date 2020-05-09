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

  console.log(`----------------------------------------`);
  
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

  console.log(`----------------------------------------`);

  var splitInParts = function(s, partLength){
        let zodis = ``;
        for ( let i=0; i<s.length; i++) {
          zodis += s[i];
          if (i % partLength === partLength - 1) {
            if (i<s.length - 1) {
              zodis += ` `;
            }
          }
        }
   return zodis
  }
    
  console.log(splitInParts("supercalifragilisticexpialidocious", 3), );
  console.log(splitInParts("dfskgjdhskgjhsdrkgjnsdfgesjkghlwluiodfaergbeulrtueirhgferjhiuilearfgfrebjfugweiufgqery", 10), );
  console.log(splitInParts("HelloKata", 1), );
  console.log(splitInParts("HelloKata", 9), );

  console.log(`----------------------------------------`);

  function noBoringZeros(n) {
        if (n === 0) {
          return 0          
        }
        while (n % 10 === 0) {
        n /= 10;
    }
    return n
  }

  console.log(noBoringZeros(99), 99)
  console.log(noBoringZeros(1450), 145)
  console.log(noBoringZeros(960000), 96)
  console.log(noBoringZeros(-105), -105)
  console.log(noBoringZeros(1050), 105)
  console.log(noBoringZeros(0), 0)

  console.log(`----------------------------------------`);

  function positiveSum(arr) {
    var sum = 0;
    for (let i = 0; i<arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i]
      }
    }
    return sum
  }

  console.log(positiveSum([1,2,3,4,5]),15);
  console.log(positiveSum([1,-2,3,4,5]),13);
  console.log(positiveSum([]),0);
  console.log(positiveSum([-1,-2,-3,-4,-5]),0);
  console.log(positiveSum([-1,2,3,4,-5]),9);

  console.log(`----------------------------------------`);

  function arrayMadness(a, b) {
    let asum = 0;
    let bsum = 0;
    let comp = false;
    for (let i=0; i<a.length; i++) {
        asum += a[i]**2 ;
    }
    for (let k=0; k<b.length; k++) {
        bsum += b[k]**3 ;
    }  
    if (asum > bsum) {
        comp = true
    }
    return comp;
  }

  console.log(arrayMadness([4,5,6],[1,2,3]), true);
  console.log(arrayMadness([5,6,7],[4,5,6]), false);
  console.log(arrayMadness([4,5,6],[3,4,5]), false);
  console.log(arrayMadness([3,4,5],[2,3,4]), false);
  console.log(arrayMadness([2,3,4],[1,2,3]), false);
  console.log(arrayMadness([1,2,3],[0,1,2]), true);
  console.log(arrayMadness([5,3,2,4,1],[15]), false);
  console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), false);
  console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), false);
  console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true);
  console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false);
  
  console.log(`----------------------------------------`);

  function correctPolishLetters (string) {
    var diacrit = ``;
    for (let i = 0; i < string.length; i++)
      if (string[i] === `ą` ) {
        diacrit += `a`;
      }
      else if (string[i] === `ć` ) {
        diacrit += `c`;
      }
      else if (string[i] === `ę` ) {
        diacrit += `e`;
      }
      else if (string[i] === `ł` ) {
        diacrit += `l`;
      }
      else if (string[i] === `ń` ) {
        diacrit += `n`;
      }
      else if (string[i] === `ó` ) {
        diacrit += `o`;
      }
      else if (string[i] === `ś` ) {
        diacrit += `s`;
      }
      else if (string[i] === `ź` ) {
        diacrit += `z`;
      }
      else if (string[i] === `ż` ) {
        diacrit += `z`;
      }
      else{
        diacrit += string[i];
      }        
    return diacrit
  }

console.log(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");

console.log(`----------------------------------------`);

function strCount(str, letter){  
  var count = 0;
  for (let i = 0; i < str.length; i++) 
    if (str[i] === letter) {
      count++; 
    }   
    return count
}

console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0);

console.log(`----------------------------------------`);

function testEven(n) {
  var test = false; 
  if (n % 2 === 0) {
    test = true
  } 
  return test
}

console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");