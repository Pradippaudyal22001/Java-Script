let str1 = "Please visit Microsoft!";

let newText = str1.replace("Microsoft", "W3Schools");

console.log(newText)

// replace string
let text = "let join us in the beach party"
let newmessage = text.replace("beach", "club")
console.log(newmessage)
// replace all string
let message = "let join us in the beach party.Have some fun in the beach .drinks alchole in the beach and again go to swim in the beach"
let newmsg = message.replaceAll("beach", "pub")
console.log(newmsg)
// uppercase string
let text1 = "let join us in the beach party"
let text2 = text1.toUpperCase();
console.log(text2)
// lowercase string
let text11 = "LET JOIN US IN THE BEACH PARTY"
let text12 = text1.toLowerCase();
console.log(text12)


// concact
let msg1 = "hello guys"
let msg2 = "how are you"
let msg3 = msg1.concat(" " , msg2);
console.log(msg3)

//  trim /trimstart/trimend
let msg4 = "  hello guys  ";
console.log(msg4);

let msg5 = msg4.trim();
console.log(msg5);
let msg6=msg4.trimStart()
console.log(msg6)

let num = 6;

// number to string
// Number.toString()
let numStr = num.toString();

let padS = numStr.padEnd(5,'*');
console.log(padS);
// padstart
let num1= 10;
let num2 = num1.toString();
let num3 = num2.padStart(7, "#")
console.log(num3)
// charAt
let word1 ="hello world"
let char = word1.charAt(2)
console.log(char)
// last index/ indexof
let Text1 = "let join us in the beach party beach party beach party"
let pos1 = Text1.lastIndexOf("beach");
console.log(pos1);
// includes
let Text2 = "let join us in the beach party beach party beach party"
let pos2 = Text2.includes("beach")
console.log(pos2)
//  startwith

let Text3 = "let join us in the beach party beach party beach party"
let pos3 = Text3.startsWith("let")
console.log(pos3)
//  endwith

let Text4 = "let join us in the beach party beach party beach party"
let pos4 = Text3.endsWith("party")
console.log(pos4)