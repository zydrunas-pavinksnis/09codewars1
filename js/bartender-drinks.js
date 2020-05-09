"use strict";

function getDrinkByProfession(param){
    param = param.toLowerCase();
    let drink = ``;
        switch (param) {
            case `jabroni`:
                drink = "Patron Tequila";
                break;
            case `school counselor`:
                drink = "Anything with Alcohol";
                break;
            case `programmer`:
                drink = "Hipster Craft Beer";
                break;
            case `bike gang member`:
                drink = "Moonshine";
                break;  
            case `politician`:
                drink = "Your tax dollars";
                break;  
            case `rapper`:
                drink = "Cristal";
                break;        
            default:
                drink = "Beer";
    }
    return drink
    }

console.log(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
console.log(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
console.log(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
console.log(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");

console.log(`----------------------------------------`);

function opposite(number) {
    if (number === 0) {
    var oposit = 0    
    } 
    else {
        var oposit = number*-1
    }
    return oposit
}

console.log(opposite(1), -1,);
console.log(opposite(0), 0,);

console.log(`----------------------------------------`);

function tripleTrouble(one, two, three){
    let word = ``;
    for (let i = 0; i < one.length; i++) {
        word = word + one[i] + two[i] + three[i]        
    }
    return word
}
   
console.log(tripleTrouble("this","test","lock"), "ttlheoiscstk");
console.log(tripleTrouble("aa","bb","cc"), "abcabc");
console.log(tripleTrouble("Bm", "aa", "tn"), "Batman");
console.log(tripleTrouble("LLh","euo","xtr"), "LexLuthor");
console.log(tripleTrouble("Titas","Vytaute","Rugile"), "kazkas"); 

console.log(`----------------------------------------`);

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) 
        if (arr[i] > 0) {
            sum += arr[i]
        }
    return sum
}

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);

console.log(`----------------------------------------`);

function differenceInAges(ages){
    let youngest = ages[0];
    let oldest = ages[0];
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] < youngest) {
            youngest = ages[i] }
        if (ages[i] > oldest) {
            oldest =  ages[i] }
        }    
    return [youngest, oldest, oldest - youngest]
}

console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);