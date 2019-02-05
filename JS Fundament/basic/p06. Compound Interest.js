function accumulate(input) {
    let p = input[0];
    let i = input[1] / 100;
    let period = input[2];
    let t = input[3];
    let n = 12 / period;
    let f = p * (1 + (i / n))**(n*t);
    console.log(f);
}

accumulate([100000, 5, 12, 25]);