//variable decleration
/**
 * const   can't change the value
 * var      can redecleare global scope
 */ //let    can't redeclare value , local scope
const ax = 10;
console.log(ax);
// let a = 10;
// let a = 20;
// console.log(a);

var b = 10;
var b = 20;
console.log(b)




let a = 10;
if (true) {
    var b = 30
    let a = 20
    console.log('inner block ' + a)
    var local = 'nice to meet you';       //{ var huda bracke}
    var local = 'world';
    console.log(local);
}


console.log(local);
console.log('if block outside ' + a);
console.log(b);


if (true) {
    var b = 30
    let a = 20
    console.log('inner block ' + a)
     let local = 'nice to meet you';
    
    console.log(local);
}
console.log(local)