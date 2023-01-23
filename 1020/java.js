function buyfruit(fruit, money) {
    if (fruit == 'apple') {
        if (money < 200) {
            return (200 - money) + ' 円足りないです '
        } else if (money == 200) {
            return ' ありがとうございました。} '
        } else {
            return (money - 200) + '  円お釣りです'
        }
    }
    if (fruit == 'orange') {
        if (money < 50) {
            return (50 - money) + ' 円足りないです '
        } else if (money == 50) {
            return ' ありがとうございました。 '
        } else {
            return (money - 50) + '  円お釣りです'
        }


    }
    if (fruit == 'pineapple') {
        if (money < 300) {
            return (300 - money) + ' 円足りないです '
        } else if (money == 300) {
            return ' ありがとうございました。 '
        } else {
            return (money - 300) + '  円お釣りです'
        }

    }
    if (fruit == 'watermelon') {
        if (money < 1000) {
            return (1000 - money) + ' 円足りないです '
        } else if (money == 1000) {
            return ' ありがとうございました。 '
        } else {
            return (money - 1000) + '  円お釣りです'
        }
    }
}
console.log(buyfruit('apple', 100));
console.log(buyfruit('orange', 170));
console.log(buyfruit('pineapple', 300));
console.log(buyfruit('watermelon', 800))


// new function----------------


function buyfruit(fruit, money, pcs) {
    let totalCost=200*pcs
    if (fruit == 'apple') {
        if (money < totalCost) {
            return (totalCost - money) + ' 円足りないです '
        } else if (totalCost == money) {
            return ' ありがとうございました。} '
        } else {
            return (money - totalCost) + '  円お釣りです'
        }
    }
    if (fruit == 'orange') {
        let totalCost= 50*pcs
        if (money < totalCost) {
            return (totalCost - money) + ' 円足りないです '
        } else if (money == totalCost) {
            return ' ありがとうございました。 '
        } else {
            return (money - (totalCost)) + '  円お釣りです'
        }


    }
    if (fruit == 'pineapple') {
        let totalCost = 300 * pcs;
        if (money < totalCost) { // 500 < 300
            return (totalCost - money) + ' 円足りないです '
        } else if (money == totalCost) {
            return ' ありがとうございました。 '
        } else {
            return (money - totalCost) + '  円お釣りです'
        }

    }

    if (fruit == 'watermelon') {
        let totalCost = 1000 * pcs;
        if (money < totalCost) {
            return (totalCost - money) + ' 円足りないです '
        } else if (money == totalCost) {
            return ' ありがとうございました。 '
        } else {
            return (money - totalCost) + '  円お釣りです'
        }
    }
}
console.log(buyfruit('apple', 500, 3));
console.log(buyfruit('orange', 500, 3));
console.log(buyfruit('pineapple', 500, 3));
console.log(buyfruit('watermelon', 500, 3));