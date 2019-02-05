function atm(arr) {
    let totalMoney = {};
    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].length;
        if (token > 2) {
            //insert
            let insertedMoney = arr[i].reduce((acc, cur) => {
                return acc + cur;
            });
            for (let j = 0; j < arr[i].length; j++) {
                let banknote = arr[i][j];
                if (totalMoney[banknote] == null) {
                    totalMoney[banknote] = 1;
                } else {
                    totalMoney[banknote]++;
                }
            }

            let values = Object.values(totalMoney);
            let keys = Object.keys(totalMoney);
            let allSum = 0;
            for (let j = 0; j < keys.length; j++) {
                allSum += Number(keys[j]) * Number(values[j]);
            }

            console.log(`Service Report: ${insertedMoney}$ inserted. Current balance: ${allSum}$.`)
        } else if (token === 2) {
            //withdraw
            let balance = +arr[i][0];
            let draw = +arr[i][1];
            let values = Object.values(totalMoney);
            let keys = Object.keys(totalMoney);
            let cash = 0;
            for (let j = 0; j < keys.length; j++) {
                cash += Number(keys[j]) * Number(values[j]);
            }
            if (cash < draw) {
                console.log("ATM machine is out of order!");
                continue;
            }

            if (balance < draw) {
                console.log(`Not enough money in your account. Account balance: ${balance}$.`)
            } else {
                console.log(`You get ${draw}$. Account balance: ${balance - draw}$. Thank you!`);
                let count100 = 0;
                let count50 = 0;
                let count20 = 0;
                let count10 = 0;
                let count5 = 0;
                let count1 = 0;

                let keys = Object.keys(totalMoney).map((x) => Number(x));
                let values = Object.values(totalMoney);



                return;
                if (  draw >= 100) {
                    count100 = Math.floor(draw / 100);
                    draw %= 100;
                    for (let j = 0; j < count100; j++) {
                        totalMoney.splice(totalMoney.indexOf(100), 1);
                    }
                }
                if (draw >= 50) {
                    count50 = Math.floor(draw / 50);
                    draw %= 50;
                    for (let j = 0; j < count50; j++) {
                        totalMoney.splice(totalMoney.indexOf(50), 1);
                    }
                }
                if (draw >= 20) {
                    count20 = Math.floor(draw / 20);
                    draw %= 20;
                    for (let j = 0; j < count20; j++) {
                        totalMoney.splice(totalMoney.indexOf(20), 1);
                    }
                }
                if (draw >= 10) {
                    count10 = Math.floor(draw / 10);
                    draw %= 10;
                    for (let j = 0; j < count10; j++) {
                        totalMoney.splice(totalMoney.indexOf(10), 1);
                    }
                }
                if (draw >= 5) {
                    count5 = Math.floor(draw / 5);
                    draw %= 5;
                    for (let j = 0; j < count5; j++) {
                        totalMoney.splice(totalMoney.indexOf(5), 1);
                    }
                }
                if (draw >= 1) {
                    count1 = Math.floor(draw / 1);
                    draw %= 1;
                    for (let j = 0; j < count1; j++) {
                        totalMoney.splice(totalMoney.indexOf(1), 1);
                    }
                }

            }
        } else if (token < 2) {
            //report
            let banknote = +arr[i][0];
            let count = 0;

            console.log(`Service Report: Banknotes from ${banknote}$: ${totalMoney[banknote]}.`);
        }
    }
}

atm([
        [20, 5, 100, 20, 1],
        [457, 25],
        [1],
        [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
        [20, 85],
        [5000, 4500],
    ]
);