function isValid(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let x1 = +arr[0];
        let y1 = +arr[1];
        let x2 = +arr[2];
        let y2 = +arr[3];
        if (i === 0) {
            x2 = 0;
            y2 = 0;
        } else if (i === 1) {
            x1 = x2;
            y1 = y2;
            x2 = 0;
            y2 = 0;
        }

        let a = Math.abs(x1 - x2);
        let b = Math.abs(y1 - y2);
        let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        if (c === parseInt(c)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
        }
    }
}

isValid([3, 0, 0, 4]);