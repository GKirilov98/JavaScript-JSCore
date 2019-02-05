function coffeeMachine(arr) {
    let sumDrink = 0;
    let totalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(", ");
        let insertedCoins = tokens[0];
        let typeOfDrink = tokens[1];
        let price = 0;
        let milkTea = 0;
        let milkCoffee = 0;
        switch (typeOfDrink) {
            case 'tea':
                price = 0.8;
                if (tokens[2] === 'milk') {
                    milkTea = Number((0.80 * 0.10).toFixed(1));
                }
                break;
            case 'coffee':
                let coffeeType = tokens[2];
                switch (coffeeType) {
                    case 'caffeine':
                        price = 0.80;
                        break;
                    case 'decaf':
                        price = 0.90;
                        break;
                }

                if (tokens[3] === "milk") {
                    milkCoffee = Number((price * 0.10).toFixed(1));
                }
                break;
        }

        let sugar = +tokens[tokens.length -1];
        if (sugar < 1){
            sugar = 0;
        } else {
            sugar = 0.10;
        }

        let sum = price + milkCoffee + milkTea + sugar;
        if (insertedCoins >= sum){
            console.log(`You ordered ${typeOfDrink}. Price: ${sum.toFixed(2)}$ Change: ${(insertedCoins -sum).toFixed(2)}$`);
            totalSum += sum;
        } else {
            console.log(`Not enough money for ${typeOfDrink}. Need ${(sum - insertedCoins).toFixed(2)}$ more.`);
        }
    }

    console.log(`Income Report: ${totalSum.toFixed(2)}$`);
}

coffeeMachine(
    ['1.00, coffee, caffeine, milk, 4']
);