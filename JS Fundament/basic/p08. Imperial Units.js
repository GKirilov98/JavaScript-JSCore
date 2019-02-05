function convert(n) {
    let inches = +n;
    let feet = inches /12;
    let feet2 = parseInt(feet);
    let inches2 = Math.round((feet - feet2) * 12);
    console.log(`${feet2}'-${inches2}"`)
}

convert(11);