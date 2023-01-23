/**
 * return function
 */
function greetingmsg() {

    console.log('you enter here ..........');
    return 'hello'
}

function addtwonumber(numeone, numtwo) {
    return numeone + numtwo

}

let msg = greetingmsg();
console.log(typeof msg + '>' + msg);

console.log(addtwonumber(1, 2))
console.log(addtwonumber(3, 6))
console.log(addtwonumber(7, 11))
console.log(addtwonumber(12, 17))

let sum = addtwonumber(55, 45)
console.log('>>>' + sum)


function greetingmsgwithname(name) {
    let msg = 'welcome' + name;
    return msg;
}
msg = greetingmsgwithname('pradip');
console.log(msg);
msg = greetingmsgwithname('kumar');
console.log(msg);
msg = greetingmsgwithname('paudyal');
console.log(msg);


function callpeoplebyname(name) {
    let people = 'welcome back' + name;
    return people;
}

people = callpeoplebyname('pradip');
console.log(people)



function spellthename(name) {
    let spell = 'my name is '+ name;
    return spell;
}
spell = spellthename('pradip');
console.log(spell);