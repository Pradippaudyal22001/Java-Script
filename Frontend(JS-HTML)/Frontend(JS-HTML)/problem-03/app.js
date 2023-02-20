let Entertext = document.getElementById('entertext');

function calculatevalue(value) {
    // value:a

    // check checkbox button  // rdo.checked

    // if checkbox button is checked, change value to uppercase
    // Entertext.value = Entertext.value + toUpperCase(value)

    // else
    let Shiftvalue = document.getElementById('shiftid');
    if (Shiftvalue.checked==true) {
        Entertext.value = Entertext.value + value.toUpperCase();
    } else {
        Entertext.value = Entertext.value + value;
    }


}

function clearvalue() {
    Entertext.value = "";
}

function deletevalue() {
    Entertext.value = (Entertext.value).substring(0, Entertext.value.length - 1);
}