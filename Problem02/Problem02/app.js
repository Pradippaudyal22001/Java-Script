let Firststring = document.getElementById('firststring');
let Secondstring = document.getElementById('secondstring')

 function mergeStringFirstAndSecond(){
    let Twoinputvalue = document.getElementById('twoinputvalue');
      Twoinputvalue.innerText = Firststring.value+Secondstring.value;

}
function searchkeystringposition1(){
    let Firstsearchkeystring = document.getElementById('firstsearchkeystring');
    let Searchkeystring = document.getElementById('searchkeystring');

    if(Firststring.value.includes( Searchkeystring.value)){
        Firstsearchkeystring.innerText=  " ○○Key Exists"
    } else{
        Firstsearchkeystring.innerText=   " ○○Key doesn't Exists"
    }
}
function searchkeystringposition2(){
    let Secondsearchkeystring = document.getElementById('secondsearchkeystring');
    let Searchkeystring = document.getElementById('searchkeystring');

    if (Secondstring.value.includes(Searchkeystring.value)){
        Secondsearchkeystring.innerText = "○○Key Exists"
    }
    else {
        Secondsearchkeystring.innerText = " ○○Key doesn't Exists"
    }
}