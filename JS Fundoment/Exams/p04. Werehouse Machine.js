function werehouseMachine(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(", ");
        let command = tokens[0];
        switch (command) {
            case 'IN':
                let brandIN = tokens[1];
                let typeIN = tokens[2];
                let dateIN = tokens[3];
                let quantity = +tokens[4];

                if (obj[brandIN] == null) {
                    obj[brandIN] = {};
                }

                if (obj[brandIN][typeIN] == null) {
                    obj[brandIN][typeIN] = {};
                    obj[brandIN][typeIN][dateIN] = quantity;
                    continue;
                }

                let oldDate = Object.keys(obj[brandIN][typeIN])[0];
                if (oldDate === dateIN) {
                    obj[brandIN][typeIN][dateIN] += quantity;
                } else if (oldDate.localeCompare(dateIN) === -1) {
                    obj[brandIN][typeIN] = {};
                    obj[brandIN][typeIN][dateIN] = quantity;
                }
                break;
            case "OUT":
                let brandOUT = tokens[1];
                let typeOUT = tokens[2];
                let dateOUT = tokens[3];
                let quantityOUT = +tokens[4];
                if (obj[brandOUT] == null || obj[brandOUT][typeOUT] == null) {
                    continue;
                }

                let dateHave = Object.keys(obj[brandOUT][typeOUT])[0];
                if (dateHave.localeCompare(dateOUT) === 1 && quantityOUT < obj[brandOUT][typeOUT][dateHave]) {
                    obj[brandOUT][typeOUT][dateHave] -= quantityOUT;
                }
                break;
            case "REPORT":
                console.log(">>>>> REPORT! <<<<<");
                Object.keys(obj).map((x) => {
                    console.log(`Brand: ${x}:`);
                  Object.keys(obj[x]).map((t) => {
                        console.log(`-> ${t} -> ${Object.keys(obj[x][t])} -> ${Object.values(obj[x][t])}.`);
                    })
                });
                break;
            case "INSPECTION":
                console.log(">>>>> INSPECTION! <<<<<");
                Object.keys(obj).sort((a, b) => a.localeCompare(b)).map((x) => {
                    console.log(`Brand: ${x}:`);
                    Object.keys(obj[x]).sort((a, b) => {
                      return Object.values(obj[x][b]) -  Object.values(obj[x][a]);
                    }).map((t) => {
                        console.log(`-> ${t} -> ${Object.keys(obj[x][t])} -> ${Object.values(obj[x][t])}.`);
                    })
                });
                break;
        }
    }
}

werehouseMachine([
        "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
        "IN, Folgers, Black Silk, 2023-03-01, 14",
        "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
        "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
        "IN, Folgers, Black Silk, 2022-01-01, 10",
        "IN, Lavazza, Intenso, 2022-07-19, 20",
        "OUT, Dallmayr, Espresso, 2022-07-19, 5",
        "OUT, Dallmayr, Crema, 2022-07-19, 5",
        "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
        "REPORT",
        "INSPECTION"
    ]
);