let str= "hello world 123";

//length method
//start position , end position(not included)
console.log(str.length);
console.log(str.slice(0,5));
console.log(str.slice(6,11));

//  slice string  ('-' function pNI garna milxa)
let str1= 'Apple,Banana,Kiwi,Orange'
console.log(str1.length);
console.log(str1.slice(0,5)); 
console.log(str1.slice(6,12));
console.log(str1.slice(13,17));
console.log(str1.slice(18,24));
console.log(str1.slice(0,12));
console.log(str1.slice(6,17));
console.log(str1.slice(13,24));
console.log(str1.slice(-6));


// substring ('-' function garna mildaina)
console.log(str1.substring(0,5))
console.log(str1.substring(6,12))
// substr  ( kaha bata ani kati ota letter lineeee tyo matra milxa )
console.log(str1.substr(18,6))
console.log(str1.substr(0,5))
console.log(str1.substr(6,6))



