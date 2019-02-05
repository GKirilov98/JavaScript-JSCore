function autoEngCompany(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" | ");
        if (obj[tokens[0]] == null) {
            obj[tokens[0]] = {};
        }
        if (obj[tokens[0]][tokens[1]]) {
            obj[tokens[0]][tokens[1]] += +tokens[2];
        }else {
            obj[tokens[0]][tokens[1]] = +tokens[2];
        }
    }

    Object.keys(obj).map((x) => {
        console.log(x);
        Object.keys(obj[x]).map((j) => console.log(`###${j} -> ${obj[x][j]}`))
    })
}

autoEngCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)