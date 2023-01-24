let a = 10;
let b = a+20;
a+= 20 // a= a+20;
//a++;
//a--;
b=a+b;
console.log(b);
console.log(a++);
console.log(a);
console.log(++a);
console.log(--a);


let c = 0;
let d = 0;
let e = (--c)+(--d)+(c++)+(d++);
console.log(e);