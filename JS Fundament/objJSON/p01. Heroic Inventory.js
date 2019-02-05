function heroInvent(arr) {
    let heroes = [];
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(/\W+/);
        let name = tokens[0];
        let level = +tokens[1];
        let items = [];
        for (let j = 2; j < tokens.length; j++) {
            items[j-2] = tokens[j];
        }
        let obj = {};
        obj["name"] = name;
        obj["level"] = level;
        obj["items"] = items;
        heroes.push(obj);
    }
    console.log(JSON.stringify(heroes));
}

heroInvent(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])
;