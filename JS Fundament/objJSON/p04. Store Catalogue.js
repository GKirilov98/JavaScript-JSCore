function sortCatalogue(arr) {
    let catalog = {};
    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].split(" : ");
        catalog[token[0]] = +token[1];
    }

    let sortedCatalog = Object.keys(catalog).sort();
    for (let i = 0; i < sortedCatalog.length; i++) {
            let nowChar = sortedCatalog[i].charAt(0);
        if ( i !== 0) {
            let beforeChar = sortedCatalog[i - 1].charAt(0);
            if (beforeChar !== nowChar){
                console.log(nowChar);
            }
        } else {
            console.log(nowChar);
        }

        console.log(`  ${sortedCatalog[i]}: ${catalog[sortedCatalog[i]]}`);
    }
}

sortCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);