let s = 'hello nice to meet you'
//string split > return array
let splitresult = s.split (' ');
console.log(splitresult);

let v = 'hello:nice:to:meet'
//string split > return array
let splitresults = v.split (':');
console.log(splitresults);


let s2 = '1,2,3,4,5';console.LOF
let splitresult2 = s2.split(',')
console.log(splitresult2)

//string search

let str ="please locate where 'locate'occurs"
let pos = str.indexOf('locate');
console.log(pos)
let pos1 = str.lastIndexOf('locate');
console.log(pos1);
  
//includes
let isInclude = str.includes('locate')
console.log(isInclude)

// startwith 
let isstartwithA = str.startsWith('a');
console.log(isstartwithA)
 
// endwith
let isendwithS = str.endsWith('s');
console.log(isendwithS)


















