function square(n) {
    if (n % 2 === 0) {
        let symbol = '+';
        let symbol2 = '-';
        for (let i = 1; i <= n - 1; i++) {
            if ( i === 1 || i === n-1 || i === (n /2)){
                symbol = '+';
                symbol2 = '-';
            } else {
                symbol = '|';
                symbol2 = ' ';
            }

            for(let j = 0; j < 2* n - 1; j++){
                if ( j === 0 || j === 2*n-2 || j === (2*n-2)/2){
                    process.stdout.write(symbol);
                }else {
                    process.stdout.write(symbol2);
                }
            }

            console.log();
        }
    } else {
        for (let i = 0; i < n; i++) {
            if ( i === 0 || i === n-1 || i === ((n -1) /2)){
                symbol = '+';
                symbol2 = '-';
            } else {
                symbol = '|';
                symbol2 = ' ';
            }

            for(let j = 0; j < 2* n - 1; j++){
                if ( j === 0 || j === 2*n-2 || j === (2*n-2)/2){
                    process.stdout.write(symbol);
                }else {
                    process.stdout.write(symbol2);
                }
            }

            console.log();
        }
    }
}

