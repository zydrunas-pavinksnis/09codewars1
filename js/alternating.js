"use strict";

//String.prototype.toAlternatingCase = function (text) {
//    console.log(this);
//};

//console.log( `efsdgergteGUYG`.toAlternatingCase() );

String.prototype.firstLetter = function() {
    console.log(this);
    return this[0];

}

console.log( `ujytguigyui` .firstLetter() );
console.log( `klmTGJGHi` .firstLetter() );


String.prototype.lastLetter = function() {
    console.log(this);
    return this[this.length -1];

}

console.log( `ujytguigyui` .lastLetter() );
console.log( `klmTGJGH5` .lastLetter() );
console.log( `klmTGghgfd` .lastLetter() );



String.prototype.toAlternatingCase = function() {
    console.log(this);
    let naujasTekstas = '';

        for (let i=0; i<this.length; i++) {
            let naujaraide = this[i];
            if(naujaraide === naujaraide.toLowerCase()) {
                naujasTekstas = naujasTekstas + naujaraide.toUpperCase();
            }
            else{
                naujasTekstas = naujasTekstas + naujaraide.toLowerCase();    
            }
        }
             

    return naujasTekstas

}

console.log( `Labas Rytjgsdfjks KghjhUTjhguygUYgUygf` .toAlternatingCase() );
