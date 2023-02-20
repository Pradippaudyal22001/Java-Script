
let Entertext = document.getElementById('entertext');
function calculatevalue(value){
    let Calculatorvalue = document.getElementById('calculatorvalue'); // button
   

    Entertext.value =  Entertext.value + value;

}
function clearvalue(){
    Entertext.value = "";
}
function deletevalue(){
    Entertext.value = (Entertext.value).substring(0,Entertext.value.length-1);
}