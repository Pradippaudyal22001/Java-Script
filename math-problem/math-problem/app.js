 function Generate3RandomNumbers() {
     let RandomNumber1 = document.getElementById('RandomNumber1');
     let RandomNumber2 = document.getElementById('RandomNumber2');
     let RandomNumber3 = document.getElementById('RandomNumber3');
     [RandomNumber1.value, RandomNumber2.value, RandomNumber3.value] = 
     [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1];

 }
 function ShowMax(){
    let Maxnumber = document.getElementById('maxnum');
    Maxnumber.innerText=  Math.max(RandomNumber1.value,RandomNumber2.value,RandomNumber3.value);


 }
 function ShowMin(){
    let Maxnumber = document.getElementById('minnum');
    Maxnumber.innerText=  Math.min(RandomNumber1.value,RandomNumber2.value,RandomNumber3.value);


 }
 function Showsame(){
    let SameNumber = document.getElementById('samenum')
    if(RandomNumber1.value==RandomNumber2.value||RandomNumber1.value==RandomNumber3.value){
SameNumber.innerText = RandomNumber1.value
    }
    else if(RandomNumber2.value==RandomNumber3.value ||RandomNumber2.value==RandomNumber1.value){
        SameNumber.innerText = RandomNumber2.value
    }
    else if(RandomNumber3.value==RandomNumber1.value ||RandomNumber3.value==RandomNumber2.value){
        SameNumber.innerText = RandomNumber3.value
    } 
    else{
        SameNumber.innerText = "there is no same number"
    }

 }