let RandomNumber = document.getElementById('random-number');
let RandomMonth = document.getElementById('month-name-show-id');

function GenerateRandomNumber() {

    RandomNumber.value = Math.floor(Math.random() * 11) + 1 ;
}

function GenerateMonthName() {
    let month = ['jan','feb','mar','apr','may','jun','jul','aug','seb','oct','nov','dec'];
    RandomMonth.innerText=month[RandomNumber.value - 1]
    
   
}