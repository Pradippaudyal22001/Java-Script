let RandomNumber = document.getElementById('random-number');
let RandomMonth = document.getElementById('month-name-show-id');

function GenerateRandomNumber() {

    RandomNumber.value = Math.floor(Math.random() * 12) + 1;
}

function GenerateMonthName() {
    let month;
    
    switch (Number(RandomNumber.value)) { // "2" // ===
        case 1:
            month = "january"
            break;

        case 2:
            month = "february"
            break;

        case 3:
            month = "march"
            break;

        case 4:
            month = "April"
            break;

        case 5:
            month = "May"
            break;

        case 6:
            month = "June"
            break;

        case 7:
            month = "july"
            break;

        case 8:
            month = "Augest"
            break;

        case 9:
            month = "September"
            break;

        case 10:
            month = "October"
            break;

        case 11:
            month = "November"
            break;

        case 12:
            month = "December"
            break;

            // fallback
        default:
            month = "Invalid"
            break;
    }
    RandomMonth.innerText = month;
}