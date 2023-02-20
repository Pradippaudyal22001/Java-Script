function square(str) {
    let inputvalue = document.getElementById("input");

    if (inputvalue.value * str > 100) {
        inputvalue.value = 1;
    } else {
        inputvalue.value = inputvalue.value * str
    }
}