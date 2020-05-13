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

console.log(`----------------------------------------`);

function zeroFuel(distanceToPump, mpg, fuelLeft) {
    let enough = false;
    if (mpg * fuelLeft >= distanceToPump) {
        enough = true
    }
    return enough

};

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);

console.log(`----------------------------------------`);

function hero(bullets, dragons){
    let survive = false;
    if (bullets / 2 >= dragons) {
        survive = true
    }
    return survive
};

console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);

console.log(`----------------------------------------`);

function doubleInteger(i) {
    i = i * 2;
    return i;
}

console.log(doubleInteger(2), 4);

console.log(`----------------------------------------`);

function countSheeps(arrayOfSheep) {
    let quantity = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            quantity++    
        };
    }
    return quantity
}

var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
    
console.log(countSheeps(array1), "There are 17 sheeps in total")

console.log(`----------------------------------------`);

function litres(time) {
    let waterAmmount = Math.floor (time * .5);
    return waterAmmount;
}

console.log(litres(3), 1,);
console.log(litres(6.7), 3,);
console.log(litres(11.8), 5,);
console.log(litres(2), 1, 'should return 1 litre');
console.log(litres(1.4), 0, 'should return 0 litres');
console.log(litres(12.3), 6, 'should return 6 litres');
console.log(litres(0.82), 0, 'should return 0 litres');
console.log(litres(11.8), 5, 'should return 5 litres');
console.log(litres(1787), 893, 'should return 893 litres');
console.log(litres(0), 0, 'should return 0 litres');

console.log(`----------------------------------------`);

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let probability = (blueStart - bluePulled) / (blueStart + redStart - bluePulled - redPulled);
    return probability
}

console.log(guessBlue(5, 5, 2, 3), 0.6);
console.log(guessBlue(5, 7, 4, 3), 0.2);
console.log(guessBlue(12, 18, 4, 6), 0.4);

console.log(`----------------------------------------`);

const areaOrPerimeter = function(l , w) {
    let answer = 0;
    if (l === w) {
        answer = l*w;      
    }
    else {
        answer = (l+w)*2;
    }
 return answer   
 };

 console.log(areaOrPerimeter(4 , 4) , 16);
 console.log(areaOrPerimeter(6 , 10) , 32);

 console.log(`----------------------------------------`);

function century(year) {
    let age = Math.floor( (year -1) / 100 ) + 1;
    return age;
}

console.log(century(1705), 18, 'Testing for year 1705');
console.log(century(1973), 20, 'Testing for year 1973');
console.log(century(2001), 21, 'Testing for year 2001');
console.log(century(2000), 20, 'Testing for year 2000');
console.log(century(89), 1, 'Testing for year 89');

console.log(`----------------------------------------`);

function enough(cap, on, wait) {
    let cant = wait - (cap - on);
    if (cant < 0) {
        cant = 0
    }
    return cant 
}

console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);