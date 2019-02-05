function systemComp(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" | ");
        let system = tokens[0];
        let components = tokens[1];
        let subComp = tokens[2];
        if (obj[system] == null) {
            obj[system] = {};
        }

        if (obj[system][components] == null) {
            obj[system][components] = [];
        }

        obj[system][components].push(subComp);
    }

    let system = Object.keys(obj).sort((a, b) => {
        let first = Object.values(obj[b]);
        let second = Object.values(obj[a]);
        if (first.length !== second.length) {
            return first.length - second.length;
        } else {
            return a.localeCompare(b);
        }
    });

    for (let systemKey of system) {
        console.log(systemKey);
        Object.keys(obj[systemKey]).sort((a, b) => {
            let first = Object.values(obj[systemKey][a]).length;
            let second = Object.values(obj[systemKey][b]).length;
            return second - first;
        }).map((x) => {
            console.log(`|||${x}`);
            for (let i = 0; i < obj[systemKey][x].length; i++) {
                console.log(`||||||${obj[systemKey][x][i]}`);
            }
        });
    }
}

systemComp(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
);
