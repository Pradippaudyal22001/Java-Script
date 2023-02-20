let inputvalue = document.getElementById('input')

function increaseOne() {

    if (inputvalue.value >= 10) {
        inputvalue.value =  0;
    } else {
        inputvalue.value = Number(inputvalue.value) + 1;
    }

}

function decreaseOne() {

    if (inputvalue.value <= 0) {
        inputvalue.value =  10;
    } else {
        inputvalue.value = Number(inputvalue.value) - 1;
    }
}