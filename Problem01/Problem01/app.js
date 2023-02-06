function putvalueofinputdata() {

    let inputdata = document.getElementById('inputdata');
    let entertext = document.getElementById('entertext');

    if (entertext.value.trim() == '') {
        inputdata.innerText = "please insert text"
    } else {

        inputdata.innerText = entertext.value;
    }
}

function showlength() {
    let entertext = document.getElementById('entertext');
    let lenght1 = document.getElementById('inputlength');
    if (entertext.value.trim() == '') {
        lenght1.innerText = "please insert text"
    } else {

        lenght1.innerText = entertext.value.length;
    }


}

function firstchar() {
    let entertext = document.getElementById('entertext');
    let firstchar = document.getElementById('firstchar');
    if (entertext.value.trim() == '') {
        firstchar.innerText = 'please enter text'
    } else {
        firstchar.innerText = entertext.value.substring(0, 1);
    }

}

function lastchar() {
    let entertext = document.getElementById('entertext');
    let lastchar = document.getElementById('lastchar');

    lastchar.innerText = entertext.value.slice(-1);
}

function middlechar() {
    let entertext = document.getElementById('entertext');
    let middlechar = document.getElementById('middlechar');

    let textData = entertext.value;

    let entertextlength = textData.length;

    if (entertextlength % 2 == 0) {
        let position = entertextlength / 2; // even huda kheri
        // console.log(textData.slice(position-1,position+1))
        middlechar.innerText = textData.slice(position - 1, position + 1)
    } else {
        let position = (entertextlength + 1) / 2; //odd huda kheri
        // console.log(entertext.slice(position-1,position))
        middlechar.innerText = textData.slice(position - 1, position);
    }

}

function callallfunction(){
    putvalueofinputdata();
    middlechar();
    firstchar();
    lastchar();
    showlength();
}