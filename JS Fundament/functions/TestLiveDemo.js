function trianleStars(a) {
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < i + 1; j++) {
            process.stdout.write("*");
        }

        console.log();
    }

    for (let i = a - 1; i > 0; i--) {
        for (let j = i; j > 0; j--) {
            process.stdout.write("*");
        }

        console.log();
    }
}

function squareStars(a) {
    if (a === undefined) {
        a = 5;
    }

    for (let i = 0; i < a; i++) {
        for (let j = 0; j < a; j++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}

function isPalidrome(a) {
    let char = a.split("");
    let firstHalf = "";
    for (let i = 0; i < char.length / 2; i++) {
        firstHalf += char[i];
    }

    let secondHalf = "";
    for (let i = char.length - 1; i >= char.length / 2; i--) {
        secondHalf += char[i];
    }

    if (firstHalf === secondHalf) {
        return true;
    } else {
        return false;
    }
}

function dayOfWeek(a) {
    let message = "";
    switch (a.toLowerCase()) {
        case "monday":
            message = 1;
            break;
        case "tuesday":
            message = 2;
            break;
        case "wednesday":
            message = 3;
            break;
        case "thursday":
            message = 4;
            break;
        case "friday":
            message = 5;
            break;
        case "saturday":
            message = 6;
            break;
        case "sunday":
            message = 7;
            break;
        default:
            message = "error";
    }

    console.log(message);
}

function calculator(x, y, operant) {
    let result = null;
    switch (operant) {
        case '-':
            result = x - y;
            break;
        case '+':
            result = x + y;
            break;
        case '/':
            result = x / y;
            break;
        case '*':
            result = x * y;
            break;
    }
    return result;
}

function aggregateEl(arr) {
    let line1 = null;
    let line2 = null;
    let line3 = "";
    for (let i = 0; i < arr.length; i++) {
        line1 += +arr[i];
        line2 += (1 / +arr[i]);
        line3 += arr[i];
    }

    console.log(line1);
    console.log(line2);
    console.log(line3);
}

function wordUppercase(message) {
    let words = message.toUpperCase().split(/\W+/).filter(n => n);
    console.log(words.join(", "));
}
