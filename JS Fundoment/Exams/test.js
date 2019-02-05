function atm(arr) {
    let moneyInATM = [];
    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].length;
        if (token > 2) {
            //insert
            let insertedMoney = 0;
            for (let j = 0; j < arr[i].length; j++) {
                insertedMoney += +arr[i][j];
            }
            for (let j = 0; j < arr[i].length; j++) {
                moneyInATM.push(Number(arr[i][j]));
            }

            let totalMoney = 0;
            for (let j = 0; j < moneyInATM.length; j++) {
                totalMoney += +moneyInATM[j];
            }
            console.log(`Service Report: ${insertedMoney}$ inserted. Current balance: ${totalMoney}$.`)
        } else if (token === 2) {
            //withdraw
            let balance = +arr[i][0];
            let draw = +arr[i][1];
            let sum = 0;
            for (let j = 0; j < moneyInATM.length; j++) {
                sum += Number(moneyInATM[j]);
            }
            if ( sum < draw) {
                console.log("ATM machine is out of order!");
                continue;
            }

            if (balance < draw) {
                console.log(`Not enough money in your account. Account balance: ${balance}$.`)
            } else {
                console.log(`You get ${draw}$. Account balance: ${balance - draw}$. Thank you!`);
                if (draw >= 100) {
                    let money100 =  moneyInATM.filter((x) => x === 100);
                    for (let j = 0; j < money100.length; j++) {
                        if ((draw - 100) < 0){
                            break;
                        }
                        draw -= 100;
                        moneyInATM.splice(moneyInATM.indexOf(100), 1);
                    }
                }
                if (draw >= 50) {
                    let money50 =  moneyInATM.filter((x) => x === 50);
                    for (let j = 0; j < money50.length; j++) {
                        if ((draw - 50) < 0){
                            break;
                        }
                        draw -= 50;
                        moneyInATM.splice(moneyInATM.indexOf(50), 1);
                    }
                }
                if (draw >= 20) {
                    let money20 =  moneyInATM.filter((x) => x === 20);
                    for (let j = 0; j < money20.length; j++) {
                        if ((draw - 20) < 0){
                            break;
                        }
                        draw -= 20;
                        moneyInATM.splice(moneyInATM.indexOf(20), 1);
                    }
                }
                if (draw >= 10) {
                    let money10 =  moneyInATM.filter((x) => x === 10);
                    for (let j = 0; j < money10.length; j++) {
                        if ((draw - 10) < 0){
                            break;
                        }
                        draw -= 10;
                        moneyInATM.splice(moneyInATM.indexOf(10), 1);
                    }
                }
                if (draw >= 5) {
                    let money5 =  moneyInATM.filter((x) => x === 5);
                    for (let j = 0; j < money5.length; j++) {
                        if ((draw - 5) < 0){
                            break;
                        }
                        draw -= 5;
                        moneyInATM.splice(moneyInATM.indexOf(5), 1);
                    }
                }
                if (draw >= 1) {
                    let money1 =  moneyInATM.filter((x) => x === 1);
                    for (let j = 0; j < money1.length; j++) {
                        if ((draw - 1) < 0){
                            break;
                        }
                        draw -= 1;
                        moneyInATM.splice(moneyInATM.indexOf(1), 1);
                    }
                }

            }
        } else if (token < 2) {
            //report
            let banknote = +arr[i][0];
            let count = 0;
            for (let j = 0; j < moneyInATM.length; j++) {
                if (moneyInATM[j] == Number(banknote)) {
                    count ++;
                }
            }
            console.log(`Service Report: Banknotes from ${banknote}$: ${count}.`);
        }
    }
}


