let a = 10;
let b = 'toyota';
let c = true;
let d = [];
console.log(a);
console.log(b);
console.log(c);
console.log(d);


a = a + 2; // a +=2
console.log(a);
d.push(123);
console.log(d);
d[0] = 40;
console.log(d);
d.unshift(90)
console.log(d);
let numArr = [90];
console.log('before>');
console.log('after>');
numArr[1] = 14;
console.log(numArr);



numArr = [0, 1, 2, 3, 4];
let removeEle = numArr.pop();
console.log('removeEle >' + removeEle)
console.log(numArr);
numArr.shift();
console.log(numArr);



function sumArrData(arr) {
    let firstele = arr[0];
    let secondele = arr[1];
    let sum = firstele + secondele;
    return sum

}

let sumresult = sumArrData([1, 2])
console.log(sumresult);
sumresult = sumArrData([3, 5])
console.log(sumresult);
sumresult = sumArrData([13, 5])
console.log(sumresult);



function sumArrData1(arr) {
    let firstnum = arr[0];
    let secondnum = arr[1];
    let thirtnum = arr[2];
    sum = firstnum + thirtnum + thirtnum
    return sum
}

let sumresult1 = sumArrData1([11, 12, 21])
console.log(sumresult1);
sumresult1 = sumArrData1([2, 12, 22])
console.log(sumresult1);
sumresult1 = sumArrData1([3, 13, 23])
console.log(sumresult);



function sumArrData2(arr) {
    let firstnumber = arr[0];
    let lastnumber = arr[arr.length - 1]

    if (firstnumber > lastnumber) {
        return firstnumber
    } else if (arr.length == 1) {
        return arr[0]
    } else if (arr.length == 0) {
        return 0
    } else {
        return lastnumber
    }

}

let maxnum = sumArrData2([1, 2]);
console.log(maxnum);
maxnum = sumArrData2([11, 0, 3]);
console.log(maxnum);
maxnum = sumArrData2([9, 10, 8, 4, 1]);
console.log(maxnum);
maxnum = sumArrData2([]);
console.log(maxnum);
maxnum = sumArrData2([5]);
console.log(maxnum);




function doublesumfirstAndLast(arr) {

    let firstnumber = arr[0];
    let lastnumber = arr[arr.length - 1]

    if (arr.length == 0) {
        return 0
    } else if (arr.length == 1) {
        return arr[0]
    } else if (firstnumber == lastnumber) {
        return (firstnumber + lastnumber) * 2
    }
    else {
        return firstnumber+lastnumber
    }

    
}
let doublesum=doublesumfirstAndLast([1,2,3,1]);
console.log(doublesum);
 doublesum=doublesumfirstAndLast([1,2,4]);
 console.log(doublesum);
doublesum=doublesumfirstAndLast([4,3,4]);
console.log(doublesum);
doublesum=doublesumfirstAndLast([3]);
console.log(doublesum);
doublesum=doublesumfirstAndLast([]);
console.log(doublesum);