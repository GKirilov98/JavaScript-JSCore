function biggestNum(arr) {
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];
    if (a >= b && a >= c) {
        console.log(a);
    } else if (b >= a && b >= c) {
        console.log(b);
    } else {
        console.log(c);
    }
}