function checkstartwithcharacterA(str) {

    // console.log(str);

    let firstchar = str.substr(0, 1); // (you can use substr/slice/substring)
    //console.log(firstchar);
    if (firstchar == "a") {
        return 'start with a'
    } else if (firstchar == 'A') {
        return 'return with A'
    } else {
        return "No"
    }
}



let firstcharresult = checkstartwithcharacterA('apple');
console.log(firstcharresult);
firstcharresult = checkstartwithcharacterA('ball');
console.log(firstcharresult);
firstcharresult = checkstartwithcharacterA('aeroplane');
console.log(firstcharresult);
firstcharresult = checkstartwithcharacterA('Aeroplane     ');
console.log(firstcharresult);


function checkstartwithcharacterA_B(str) {

    let firstchar = str.substr(0, 1);
    if (firstchar == 'a') {
        return 'start with a'
    } else if (firstchar == 'A') {
        return 'start with A'
    } else if (firstchar == 'b') {
        return 'start with b'
    }
    if (firstchar == 'B') {
        return 'start with B'
    } else {
        return 'NO'
    }


}
let firstcharresults = checkstartwithcharacterA_B('another');
console.log(firstcharresults);
firstcharresults = checkstartwithcharacterA_B('Acronu');
console.log(firstcharresults);
firstcharresults = checkstartwithcharacterA_B('bathing');
console.log(firstcharresults);
firstcharresults = checkstartwithcharacterA_B('bus');
console.log(firstcharresults);
firstcharresults = checkstartwithcharacterA_B('car');
console.log(firstcharresults);
firstcharresults = checkstartwithcharacterA_B('Bus');
console.log(firstcharresults);
firstcharresults = checkstartwithcharacterA_B('valley');
console.log(firstcharresults);


function checkendwithcharacterE(str) {

    let lastchar = str.substring(str.length - 1); // or lastchar=str.slice(-1)
    if (lastchar == 'E') {
        return 'end with E'
    } else if (lastchar == 'e') {
        return 'end with e'
    } else {
        return 'No'
    }
}
let lastchar = checkendwithcharacterE('polite');
console.log(lastchar);
lastchar = checkendwithcharacterE('animal');
console.log(lastchar);
lastchar = checkendwithcharacterE('translate');
console.log(lastchar);

function returnlast3char(str) {

    if (str.length <= 3) {
        return str
    } else if (str.length > 3) {
        return str.slice(length - 3)
    }

}
let lastchar3 = returnlast3char('a');
console.log(lastchar3);
lastchar3 = returnlast3char('ab');
console.log(lastchar3);
lastchar3 = returnlast3char('abc');
console.log(lastchar3);
lastchar3 = returnlast3char('abcd');
console.log(lastchar3);
lastchar3 = returnlast3char('abcde');
console.log(lastchar3);
lastchar3 = returnlast3char('abcdef');
console.log(lastchar3);




function returnfirst3char(str) {

    if (str.length <= 3) {
        return str
    } else if (str.length > 3) {
        return str.slice(0,3)
    }

}
let firstchar3 = returnfirst3char('a');
console.log(firstchar3);
firstchar3 = returnfirst3char('ab');
console.log(firstchar3);
firstchar3 = returnfirst3char('abc');
console.log(firstchar3);
firstchar3 = returnfirst3char('abs');
console.log(firstchar3);
firstchar3 = returnfirst3char('pink');
console.log(firstchar3);
firstchar3 = returnfirst3char('apple');
console.log(firstchar3);






function findmidcharacter(str){
console.log(str.substr((str.length/2)-0.5,1))
}

findmidcharacter('egg');
findmidcharacter('apple');
findmidcharacter('pineapple');


// for even

function findmidcharacter(str){
    console.log(str.substr((str.length/2)-1,2))
    }
    
    findmidcharacter('book');
    findmidcharacter('oppo');
    findmidcharacter('read');
    findmidcharacter('amazon');
    findmidcharacter('facebook');
    findmidcharacter('reader');


    function findmid_number(str){
        if ((str.length % 2 ) == 0){
            return str.substr((str.length/2-1),2);
        }
        else{
            return str.substr((str.length/2)-0.5,1);
        }

    }
    let midchar=findmid_number('egg');
    console.log(midchar);
    midchar=findmid_number('amazon')
    console.log(midchar)