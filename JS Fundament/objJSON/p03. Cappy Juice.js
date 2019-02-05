function cappyJuice(arr) {
    let juiceQuantity = {};
    let juiceBottle = {};
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" => ");
        let juice = tokens[0];
        let quantity = +tokens[1];
        if (juiceQuantity[juice]) {
            juiceQuantity[juice] += quantity;
        } else {
            juiceQuantity[juice] = quantity;
        }

        if (juiceQuantity[juice] >= 1000) {
            if (juiceBottle[juice]) {
                juiceBottle[juice] += parseInt(juiceQuantity[juice] / 1000);
            } else {
                juiceBottle[juice] = parseInt(juiceQuantity[juice] / 1000);
            }

            juiceQuantity[juice] = juiceQuantity[juice] % 1000;
        }
    }
    Object.keys(juiceBottle).map((x) => {console.log(`${x} => ${juiceBottle[x]}`)})
}

cappyJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);