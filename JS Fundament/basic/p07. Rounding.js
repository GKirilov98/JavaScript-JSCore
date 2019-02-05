function round(arr) {
    let number =  arr[0];
    let decimalPlace = arr[1];
    if (decimalPlace > 15){
        decimalPlace = 15;
    } else if (decimalPlace < 0){
        decimalPlace = 0;
    }
    let result = +number.toFixed(decimalPlace);
    console.log(result);
}
round([10.5, 3]);