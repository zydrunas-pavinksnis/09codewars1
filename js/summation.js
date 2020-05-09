"use strict";

var summation = function (num) {
    let suma = 0;
    for (let i = 0; i <= num; i++) {
        suma += i;        
    }
    return suma
}

console.log(summation(1), 1);
console.log(summation(8), 36);

console.log(`-----------------------------`);

function past(h, m, s){
   let mili = h*60*60*1000 + m*60*1000 + s*1000 ;
   return mili      
}

console.log(past(0,1,1),61000)
console.log(past(1,1,1),3661000)
console.log(past(0,0,0),0)
console.log(past(1,0,1),3601000)
console.log(past(1,0,0),3600000)