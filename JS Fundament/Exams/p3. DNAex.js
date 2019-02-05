function dnaEx(arr) {
    let regexName = /[a-z]+(?=[!@#$?])/gm;
    let regexLength = /(?<=[=])\d+/gm;
    let regexCountGenex = /(?<=[--])\d+/gm;
    let regexOrganism = /(?<=[<<])\w+/gm;

    let obj = {};
    for (let i = 0; i < arr.length - 1; i++) {
        let token = arr[i];
        let name = token.match(regexName);
        if (name != null) {
            name = name.reduce((a, c) => a + c);
            let length = +token.match(regexLength);
            if (length != null && name.length === length) {
                let countGenex = +token.match(regexCountGenex);
                if (countGenex != null) {
                    let organism = token.match(regexOrganism);
                    if (organism != null) {
                        // name = name.split("").splice(0,length).join("");
                        if (obj[organism] == null) {
                            obj[organism] = countGenex;
                        } else {
                            obj[organism] += countGenex;
                        }
                    }
                }
            }
        }
    }

    Object.keys(obj).sort((a, b) => obj[b] - obj[a]).map((x) =>
        console.log(`${x} has genome size of ${obj[x]}`));
}

// dnaEx([
//         '!@ру?би#=4--57<<polecat',
//         '?do?@#ri#=4--89<<polecat',
//         '=12<<cat',
//         '!vi@rus?=2--142',
//         '@pa!rcu>ba@cteria$=13--234<<mouse',
//         '?!cur##viba@cter!!=11--680<<cat',
//         'Stop!'
//     ]
// );

dnaEx([
    '!@ab?si?di!a@=7--152<<human',
    'b!etu?la@=6--321<<dog',
    '!curtob@acter##ium$=14--230<<dog',
    '!some@thin@g##=9<<human',
    'Stop!'
]);