/**
 * js function void && return
 */
function voidfunction(number) {
    console.log(' this is void function' + number);

}
voidfunction(1234567890);

function findmax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
let maxnum = findmax(2, 4);
console.log('maximum num of 2,6' + maxnum);
maxnum = findmax(58, 60);
console.log('maximum number between 58,60 ' + maxnum)

function findmax(a, b, c) {
    if (a > b & a > c) {
        return a;
    }
    if (b > c) {
        return b;
    } else {
        return c
    };

}
let maxvalue = findmax(20, 18, 22);
console.log('maximum number of 20,18,22 is' + maxvalue);

function thenumber(a, b, c, d, e) {
    if (a > b && a > c && a > d && a > e) {
        return a;
    }
    if (b > c && b > d && b > e) {
        return b;
    }
    if (c > d && c > e) {
        return c
    }
    if (d > e) {
        return d;
    } else {
        return e;
    }
}
let bignumber = thenumber(10, 12, 14, 16, -18);
console.log('the big number in 10,12,14,16,18 is' + bignumber);

function findduplicatenumber(a, b, c) {
    if (a == b || a == c) {
        return a;
    } else if (b == c) {
        return b;
    } else {
        return NaN;
    }
}
let duplicatenumber = findduplicatenumber(4, 5, 4);
console.log('the duplicate number in 1,2,2 is ' + duplicatenumber);

function checkevennumber(num ){
    if(num%2==0){ 
        return 'even-number';
    }
    else{ 
        return 'odd-number';
    }
}


var evennumber = checkevennumber(4);
console.log('the even number in 4 is'+ evennumber )

function checkevennumber(num ){
    if(num%2==0){ 
        return 'even-number';  //** funcation name same use garnu parama let ko
        // satta ma var pani use garna sakinxa  */
    }
    else{ 
        return 'odd-number';
    }
}


var evennumber = checkevennumber(5);
console.log('the even number in 5 is'+ evennumber )

function clickMe() {
    console.log('I am here')
    document.getElementById('userID');

    if(pass == confirmPass) {
        // Server connect

        if(serverMsg == 'OK') {
            // Next page
        }else{
            
        }
    }else{
        document.getElementById('msgId') = 'Pass not match'
    }
}