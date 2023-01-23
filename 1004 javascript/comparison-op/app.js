/**
 * 
 * comparison operators  -> Boolean ( true false)
 * 
 * is equal    a == b 
 * not equal a!=b
 * is greater than  a > b
 * is less than a < b
 * is less than or equal a =< b  
 * is greater than or equal   a >= b
 * not equal  a !== b
 * 
 * strict[ equality]
 * strict[ non equality
 * ]
 */
let a = 10 ;
let b = 20 ;
let isEqual = (a==b);//a is equal b 
console.log ('Is equal operators > '   + isEqual);

let isnotequal = (a!=b) ; //a is not equal
console.log('Is not equal operators > ' + isnotequal);


let x = 10; // number
let y = '10'; // stirng

let normalequal= ( x==y); //check only data value
console.log('normalequal > ' + normalequal);

 let strictequal = (x===y); // check data value and data type
console.log('strict equal >'  + strictequal)

let normalnotequal = ( x!=y); //CHECK DATA TYPE ONLY
console.log('normal notequal >' + normalnotequal);

let strictnoteuqal = ( x !== y);  // not equal value or dATA TYPE
console.log('strictnoteuqal >'  + strictnoteuqal);

