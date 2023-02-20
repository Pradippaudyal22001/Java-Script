let numoneshow = document.getElementById('numone-id');
let numoneenter = document.getElementById('numoneentervalue');
let numtwoshow = document.getElementById('numtwo-id');
let numtwoenter = document.getElementById('numtwoentervalue');
let numthreeshow = document.getElementById('numthree-id');
let numthreeenter = document.getElementById('numthreeentervalue');
let Maxnumber = document.getElementById('maxnumber');
let Minnumber = document.getElementById('minnumber');
let Oddnumber = document.getElementById('oddnumber');
let Evennumber = document.getElementById('evennumber');

function numone() {

    numoneshow.value = numoneenter.value;

}

function numtwo() {

    numtwoshow.value = numtwoenter.value;

}

function numthree() {

    numthreeshow.value = numthreeenter.value;

}

function calculatemax() {
    let one = Number(numoneshow.value);
    let two = Number(numtwoshow.value);
    let three = Number(numthreeshow.value);

    if ((numoneshow.value > numtwoshow.value) && (numoneshow.value > numthreeshow.value)) {
        Maxnumber.value = numoneshow.value;
    } else if ((numtwoshow.value > numthreeshow.value) && (numtwoshow.value > numoneshow.value)) {
        Maxnumber.value = numtwoshow.value;
    } else {
        Maxnumber.value = numthreeshow.value;
    }

}

function calculatemin() {
    if ((numoneshow.value < numtwoshow.value) && (numoneshow.value < numthreeshow.value)) {
        Minnumber.value = numoneshow.value;
    } else if ((numtwoshow.value < numthreeshow.value) && (numtwoshow.value < numoneshow.value)) {
        Minnumber.value = numtwoshow.value;
    } else {
        Minnumber.value = numthreeshow.value;
    }

}

function calculateodd() {
    if (numoneshow.value % 2 == 1) {
        Oddnumber.value = numoneshow.value;
    }
    if (numtwoshow.value % 2 == 1) {
        Oddnumber.value = Oddnumber.value + " " + numtwoshow.value;
    }
    if (numthreeshow.value % 2 == 1) {
        Oddnumber.value = Oddnumber.value + ' ' + numthreeshow.value;
    }

}

function calculateeven() {
    if (numoneshow.value % 2 == 0) {
        Evennumber.value = numoneshow.value;
    }
    if (numtwoshow.value % 2 == 0) {
        Evennumber.value = Evennumber.value + ' ' + numtwoshow.value;
    }
    if (numthreeshow.value % 2 == 0) {
        Evennumber.value = Evennumber.value + ' ' + numthreeshow.value;
    }

}