function printArr(arr) {
   let nStep = +arr.pop();
    for (let i = 0; i < arr.length; i+= nStep) {
        console.log(arr[i]);
    }
}

printArr(['5',
    '20',
    '31',
    '4',
    '20',
    '2']
);