//calculategrade(90);

function calculategrade(a) {
    if (a >= 91) {
        return "S"
    }
    if (a >= 81) {
        return "A"
    }
    if (a >= 71) {
        return "B"
    }
    if (a >= 61) {
        return "C"
    }
    if (a >= 40) {
        return "D"
    } else {
        return "E  vcbx"
    }
}
var result = calculategrade(92);
console.log(result);
var result = calculategrade(72);
console.log(result);
var result = calculategrade(82);
console.log(result);
var result = calculategrade(62);
console.log(result);
var result = calculategrade(88);
console.log(result);
var result = calculategrade(41);
console.log(result);
var result = calculategrade(10);
console.log(result);
var result = calculategrade(53);
console.log(result);






function findminnumber(a, b, c) {
    if (a < b && a < c) {
        return a
    } else if (b < a && b < c) {
        return b
    } else {
        return c
    }
}
let minnumber = findminnumber(1, -2, 3)
console.log(minnumber)

function findmaxnumber(a, b, c) {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else {
        return c
    }
}
let maxnumber = findmaxnumber(1, -2, 3)
console.log(maxnumber)

function findmidnumber(a, b, c) {
    if ((a > b && a < c) || (a < b && a > c)) {
        return a
    } else if ((b < a && b > c) || (b > a && b < c)) {
        return b
    } else {
        return c
    }
}
let midnumber = findmidnumber(1, -2, 3)
console.log(midnumber)

function orderthreenumber(a, b, c) {
    let min, max, mid;
    // if (a < b && a < c) {
    //     min = a
    // } else if (b < a && b < c) {
    //     min = b
    // } else {
    //     min = c
    // }
    // if (a > b && a > c) {これでも　いいし｝
    //     max = a
    // } else if (b > a && b > c) {
    //     max= b
    // } else {
    //     max= c
    // }
    // if ((a > b && a < c) || (a < b && a > c)) {
    //     mid= a
    // } else if ((b < a && b > c) || (b > a && b < c)) {
    //     mid= b
    // } else {
    //     mid= c
    // }
    // (これでも　いい)
     min = findminnumber(a,b,c) 
    max =findmaxnumber(a,b,c)
    mid = findmidnumber(a,b,c)
    return min  + ' ' +  mid + ' ' +  max ;

}
console.log(orderthreenumber(1,-2,3));

