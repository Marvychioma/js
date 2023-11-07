let myName = prompt( "what's your name" );


 
let firstChar = myName.slice(0,1);

let firstCharUpperCase = firstChar.toUpperCase();


let otherNames= myName.slice(1,myName.length) ;

alert("Hello! " +  firstCharUpperCase + otherNames ) ;




