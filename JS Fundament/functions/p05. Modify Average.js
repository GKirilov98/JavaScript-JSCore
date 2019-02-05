function modAvarage(num) {
    let digits = num.toString().split("");
    while (true){
        let digitsSum = null;
        for (let i = 0; i < digits.length; i++) {
           digitsSum += +digits[i];
        }

        if (digitsSum / digits.length > 5){
            break;
        } else {
            digits[digits.length] = 9;
            digitsSum = null;
        }
    }

    console.log(digits.join(""));
}

modAvarage(101);